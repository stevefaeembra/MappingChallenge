import { Layer } from "mapbox-gl";
import { THEME_KEY } from "../../constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeSwitcher, THEMES } from "./ThemeSwitcher";

interface Props {
  layers: Layer[],
  toggleHandler: Function, // callback for parent to handle
};

function SideBar(props: Props) {
    return (
        <div className="">
            {props.layers.map(layer => {
                return (
                    <div key={layer.id} className="mb-4">
                        <span className="pb-4">{layer.id}</span>
                        <input
                            key={`btn_${layer.id}`}
                            type="checkbox"
                            defaultChecked={layer.props.visible}
                            onClick={() => props.toggleHandler(layer.id)}
                            className="toggle mt-6 ml-4"
                        />
                    </div>
                );
            })}
            <ThemeSwitcher />
        </div>
    );
}

export default SideBar;
