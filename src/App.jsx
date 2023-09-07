import './styles.css'
import { CardManga } from './card.jsx'
import { items, olympus } from './capitulos.jsx'




export default function App() {
  return (
    <div className="App">
      <h1>Mis Mangas</h1>
      <div className="container">
        {items.map(item => (
          <CardManga
            key={item.id}
            link={item.link.concat(item.chapter)}
            chapter={item.chapter}
            src={item.image}
            alt={item.name}
            children={item.name}
            day={item.dia}
          />
        ))}

        {olympus.map(oly => (
          <CardManga
            key={oly.id}
            link={oly.link1.concat(oly.midlink).concat(oly.link2)}
            chapter={oly.chapter}
            src={oly.image}
            alt={oly.name}
            children={oly.name}
            day={oly.dia}
          />
        ))}

      </div>
    </div>
  );
}

