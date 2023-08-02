
function App() {

  return (
    <div>

      <header className="header">
        <img src="" className="rocket-logo" alt="rocket" />
        <img src="" className="todo-logo" alt="todo"/>
      </header>

      <div className="wrapper">    
        <form action="">
          <input type="text" />
          <button className="{style.create-task-button}">Criar</button>
        </form>

        <main>
          <header>
            <div>
              <span>Tarefas criadas</span>
              <div>0</div>
            </div>

            <div>
                <span>Concluidas</span>
                <div>0</div>
            </div>
            
          </header>

          <div>
            lista de tarefas
          </div>

        </main>
      </div>



    </div>
  )
}

export default App
