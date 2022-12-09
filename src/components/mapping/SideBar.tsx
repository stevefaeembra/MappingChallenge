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
        <div className="themeable">
            <hr />
            {props.layers.map(layer => {
                return (
                    <div key={layer.id} className="mt-4 mb-4 themeable">
                        <span className="w-6/12 text-right">{layer.id}</span>
                        <input
                            key={`btn_${layer.id}`}
                            type="checkbox"
                            defaultChecked={layer.props.visible}
                            onClick={() => props.toggleHandler(layer.id)}
                            className="toggle w-2/12 ml-4 themeable"
                        />
                    </div>
                );
            })}
            <hr />
            <ThemeSwitcher />
            <div className="mb-4 mt-6 ml-4">Using data copyright OpenStreetMap contributors</div>
        </div>
    );
}

export default SideBar;
