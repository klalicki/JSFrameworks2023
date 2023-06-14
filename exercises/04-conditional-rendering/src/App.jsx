import "./App.css";
import AccordionSection from "./components/AccordionSection";
import { content } from "./content/accordion";
function App() {
  return (
    <div class="ui styled accordion">
      {content.map((item, index) => {
        return (
          <AccordionSection
            content={item.content}
            title={item.title}
            isOpen={item.isOpen}
            key={`accordionItem-${index}`}
          />
        );
      })}
    </div>
  );
}

export default App;
