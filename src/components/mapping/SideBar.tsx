import { Layer } from "mapbox-gl";
import { FC, ReactElement } from "react";
import { THEME_KEY } from "../../constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeSwitcher, THEMES } from "./ThemeSwitcher";

interface Props {
  layers: Layer[],
  toggleHandler: Function,
  changeThemeHandler: Function,// callback for parent to handle
};

const SideBar: FC<Props> = (props: Props) : ReactElement => {
    return (
        <div>
            <hr />
            {props.layers.map(layer => {
                return (
                    <div key={layer.id} className="flex justify-center mt-4 mb-4">
                        <legend className="text-center">{layer.id}</legend>
                        <input
                            key={`btn_${layer.id}`}
                            type="checkbox"
                            defaultChecked={layer.props.visible}
                            onClick={() => props.toggleHandler(layer.id)}
                            className="toggle w-2/12 ml-4"
                        />
                    </div>
                );
            })}
            <hr />
            <ThemeSwitcher changeThemeHandler={props.changeThemeHandler}/>
            <div className="mb-4 mt-6 ml-4">Using data copyright OpenStreetMap contributors</div>
        </div>
    );
}

export default SideBar;
