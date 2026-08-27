import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useDeferredValue,
  useTransition,
} from "react";
import "./App.css"
import Inputcontainer from "./components/Inputcontainer";
import Todocontainer from "./components/Todocontainer";

const ThemeContext = createContext("light");

const counterReducer = (count, action) => {
  if (action.type === "increment") return count + 1;
  if (action.type === "reset") return 0;
  return count;
};

const FocusPanel = forwardRef(function FocusPanel(_, ref) {
  const panelRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => panelRef.current?.focus(),
  }));

  return (
    <button className="focus-panel" ref={panelRef} type="button">
      Focus me with useImperativeHandle
    </button>
  );
});

function HooksLab({ todos }) {
  const theme = useContext(ThemeContext);
  const [count, dispatch] = useReducer(counterReducer, 0);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [isPending, startTransition] = useTransition();
  const [panelWidth, setPanelWidth] = useState(0);
  const panelRef = useRef(null);
  const inputId = useId();

  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.toLowerCase().includes(deferredQuery.toLowerCase())),
    [todos, deferredQuery]
  );

  const focusPanel = useCallback(() => {
    panelRef.current?.focus();
  }, []);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (panel) setPanelWidth(Math.round(panel.getBoundingClientRect().width));
  }, []);

  return (
    <section className={`hooks-lab ${theme}`}>
      <div className="lab-heading">
        <div>
          <p className="eyebrow">React 19 practice</p>
          <h2>Hooks Lab</h2>
        </div>
        <span className="theme-badge">useContext: {theme}</span>
      </div>

      <div className="hook-grid">
        <article className="hook-card">
          <h3>useReducer</h3>
          <p>State changes go through named actions.</p>
          <strong className="counter-value">{count}</strong>
          <div className="button-row">
            <button type="button" onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button type="button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
          </div>
        </article>

        <article className="hook-card">
          <h3>useDeferredValue + useTransition</h3>
          <p>Type to filter todos without blocking the input.</p>
          <label htmlFor={inputId}>Filter todos</label>
          <input
            id={inputId}
            value={query}
            onChange={(event) => {
              const nextQuery = event.target.value;
              setQuery(nextQuery);
              startTransition(() => setQuery(nextQuery));
            }}
            placeholder="Search todos"
          />
          <small>{isPending ? "Updating..." : `${filteredTodos.length} match(es)`}</small>
        </article>

        <article className="hook-card" ref={panelRef} tabIndex="-1">
          <h3>useLayoutEffect + useCallback</h3>
          <p>This panel measured itself before the browser painted.</p>
          <button type="button" onClick={focusPanel}>Focus measured panel</button>
          <small>Measured width: {panelWidth}px</small>
        </article>

        <article className="hook-card">
          <h3>useImperativeHandle</h3>
          <p>A child exposes one controlled action to its parent.</p>
          <FocusPanel ref={panelRef} />
        </article>
      </div>
    </section>
  );
}

function App() {
  const [inputVal ,setInputVal]=useState('')
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const inputRef = useRef(null)

  const todoCount = useMemo(() => todos.length, [todos])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    document.title = `${todoCount} ${todoCount === 1 ? 'todo' : 'todos'}`
  }, [todos, todoCount])

  function writeTodo(e){
    setInputVal(e.target.value)
   
  }
  
  function addTodo(e){
    if (inputVal !== '') {
      e.preventDefault();
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
      inputRef.current?.focus();
    }
  }
  

  function delTodo(todoindex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos,prevTodosIndex) =>
    {
      return prevTodosIndex !== todoindex
    }))
  }
  
  return (
    <ThemeContext.Provider value="light">
      <main>
      <h1>To Do List ({todoCount})</h1>
      <Inputcontainer inputRef={inputRef} inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
      <Todocontainer todos={todos} delTodo={delTodo}/>
        <HooksLab todos={todos} />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
