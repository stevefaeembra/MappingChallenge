import { Layer } from "mapbox-gl";
import LayerWrapper from "./LayerWrapper";

interface Props {
  layers: LayerWrapper[],
  toggleHandler: Function, // callback for parent to handle
};

function SideBar(props: Props) {

    return (
        <>
            {props.layers.map(layer => {
                return (
                    <div key={layer.id} className="mb-4">
                        <span className="pb-4">{layer.name}</span>
                        <input
                            key={`btn_${layer.id}`}
                            type="checkbox"
                            defaultChecked={layer.visible}
                            onClick={() => props.toggleHandler(layer.id)}
                            className="toggle mt-6 ml-4"
                        />
                    </div>
                );
            })}
        </>
    );
}

export default SideBar;
