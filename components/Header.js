const Header = () => (
  <header>
    <h1><span className={'sway'}>D</span><span className={'regular'}>E</span><span className={'light'}>r</span><span className={'medium'}>P</span><span>Y</span><span>V</span><span className={'light'}>i</span><span>s</span><span className={'light'}>I</span><span>O</span><span className={'regular'}>N</span></h1>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100vw;
        height: calc(100vh - 40px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1 {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 0 5%;
        justify-content: space-between;
      }
    `}</style>
  </header>
)

export default Header
