import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";
import ParagraphsComponent from "./ParagraphsComponent";
import ListsComponent from "./ListsComponent";

function App() {
  return (

    <div>
      <ImageComponent />
      <div>
        <VideoComponent />

      </div>
      <div>
        <ParagraphsComponent />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, eligendi.</p>
        <ParagraphsComponent />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, eligendi.</p>
        <ParagraphsComponent />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, eligendi.</p>
      </div>
     <div>
        <ListsComponent />
     </div>
    </div>
  );
}
export default App;
