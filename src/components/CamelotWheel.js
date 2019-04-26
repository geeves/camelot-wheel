/*
  eslint-disable no-underscore-dangle
  elint-disable  import/no-cycle
*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import KeyState from "./camelot-states";
import KeyMap from "./camelot-data";

const styles = (theme) => ({
  root : {
    flexGrow : 1,
  },
  paper : {
    height : 140,
    width : 100,
  },
  control : {
    padding : theme.spacing.unit * 2,
  },
});

class CamelotWheel extends React.Component {
  static defaultProps = {
    mode : KeyState.MAIN
  };

  constructor(props) {
    super(props);
    this.state = {
      spacing : "16",
      classes : props.classes,
      currentKey : "",
      mode : props.mode,
      keys : {
        __1A : false,
        __1B : false,
        __2A : false,
        __2B : false,
        __3A : false,
        __3B : false,
        __4A : false,
        __4B : false,
        __5A : false,
        __5B : false,
        __6A : false,
        __6B : false,
        __7A : false,
        __7B : false,
        __8A : false,
        __8B : false,
        __9A : false,
        __9B : false,
        __10A : false,
        __10B : false,
        __11A : false,
        __11B : false,
        __12A : false,
        __12B : false
      }
    };
  }

  handleChange = (key) => (event, value) => {
    this.setState({
      [key] : value,
    }, () => {
      console.log(this.state.currentKey);
      this.displayKeys(this.state.currentKey);
    });
  };

  displayKeys = (keyId) => {
    try {
      const newKeys = {...this.deselectKeys()};
      const keys = [
        keyId.replace("__", ""), /* hack until data is fixed */
        ...KeyMap[keyId][this.state.mode]
      ];
      console.log(keys);
      keys.forEach((m) => {
        newKeys[`__${m}`] = true;
      });
      this.setState({keys : newKeys, currentKey : keyId});
    } catch (e) {
      console.log(e.message);
    }
  };

  deselectKeys = () => {
    const keys = {};
    KeyMap.keys.forEach((k) => {
      keys[`__${k}`] = false;
    });
    this.setState({keys});
    return keys;
  };

  showCompatibleKeys = (e) => {
    this.displayKeys(e.target.id);
  };

  render() {
    const {spacing} = this.state;
    const {classes} = this.state;
    const {mode} = this.state;

    return (
      <Grid container justify="center" spacing={16} mode={mode} xs={12}>
        <Grid>
          <Grid container justify="center" spacing={Number(spacing)}>
            <Grid xs={12} item>
              <Paper className={classes.control}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1838 1838">
                  <defs>
                    <pattern
                      id="stripe"
                      patternUnits="userSpaceOnUse"
                      width="40"
                      height="20">
                      <line
                        x1="10"
                        y1="0"
                        x2="30"
                        y2="20"/>
                      <line
                        x1="-10"
                        y1="0"
                        x2="10"
                        y2="20"/>
                      <line
                        x1="30"
                        y1="0"
                        x2="50"
                        y2="20"/>
                    </pattern>
                    <mask id="mask">
                      <rect
                        height="2500"
                        width="2500"
                        className="rectMask"/>
                    </mask>
                  </defs>
                  <g
                    id="_12B"
                    className={classNames({highlight : this.state.keys.__12B})}
                    data-name="12B">
                    <path
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      id="__12B"
                      className={classNames("cls-1", {highlight : this.state.keys.__12B})}
                      d="M1236,125l-62,222c-26.079-7.136-137.657-25.14-173-27-29.565,1.4-146.574,16.745-181,24L758,120c73.384-16.5,197.425-33.974,242-31C1062.046,91.1,1182.644,110.533,1236,125Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_11B"
                    className={classNames({highlight : this.state.keys.__11B})}
                    data-name="11B">
                    <path
                      id="__11B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-2", {highlight : this.state.keys.__11B})
                      }
                      d="M758,122l62,220c-26.069,7.173-129.657,49.563-161,66-24.71,16.292-117.1,83.192-143,107L346,358c54.691-51.636,157.149-130.81,197-151C597.431,177.144,704.732,136.787,758,122Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_10B"
                    className={classNames({highlight : this.state.keys.__10B})}
                    data-name="10B">
                    <path
                      id="__10B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-3", {highlight : this.state.keys.__10B})
                      }
                      d="M346,358,512,518c-20.163,18.015-86.034,107.438-106.8,136.1C390.307,679.675,348.619,789.158,336,822L112,762c26.032-70.567,65.28-187.2,92-223C239.483,488.058,304.86,394.928,346,358Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_9B"
                    className={classNames({highlight : this.state.keys.__9B})}
                    data-name="9B">
                    <path
                      id="__9B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-4", {highlight : this.state.keys.__9B})
                      }
                      d="M112,762c-8.141,67.229-33.341,134.039-33,203,.453,91.591,12.6,180.969,30,268l224-63c-28.174-116.353-25.863-232.337,3-348Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_8B"
                    className={classNames({highlight : this.state.keys.__8B})}
                    data-name="8B">
                    <path
                      id="__8B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-5", {highlight : this.state.keys.__8B})
                      }
                      d="M109,1233l227-62c7.173,26.069,49.563,135.657,66,167,16.292,24.71,85.192,118.1,109,144L345,1647c-51.636-54.691-124.81-150.149-145-190C170.144,1402.569,123.787,1286.268,109,1233Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_7B"
                    className={classNames({highlight : this.state.keys.__7B})}
                    data-name="7B">
                    <path
                      id="__7B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-6", {highlight : this.state.keys.__7B})
                      }
                      d="M346,1650l168-168c18.015,20.163,107.342,86.232,136,107,25.579,14.891,137.158,58.381,170,71l-62,226c-70.567-26.032-201.2-71.28-237-98C470.058,1752.517,382.928,1691.14,346,1650Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_6B"
                    className={classNames({highlight : this.state.keys.__6B})}
                    data-name="6B">
                    <path
                      id="__6B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-7", {highlight : this.state.keys.__6B})
                      }
                      d="M758,1886l64-227.333c26.079,7.135,141.657,18.473,177,20.333,29.565-1.4,141.574-12.745,176-20l63,226.667c-73.384,16.5-193.425,35.307-238,32.333C937.954,1915.9,811.356,1900.467,758,1886Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_5B"
                    className={classNames({highlight : this.state.keys.__5B})}
                    data-name="5B">
                    <path
                      id="__5B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-8", {highlight : this.state.keys.__5B})
                      }
                      d="M1237,1883l-60-228c26.069-7.173,119.657-46.563,151-63,24.71-16.292,120.1-87.192,146-111l163,168c-54.691,51.636-134.149,115.81-174,136C1408.569,1814.856,1290.268,1868.213,1237,1883Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_4B"
                    className={classNames({highlight : this.state.keys.__4B})}
                    data-name="4B">
                    <path
                      id="__4B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-9", {highlight : this.state.keys.__4B})
                      }
                      d="M1637,1649l-162-171c20.163-18.015,85.034-104.438,105.8-133.1,14.891-25.579,54.579-132.062,67.2-164.9l225,60c-26.032,70.567-64.28,184.2-91,220C1746.517,1510.942,1678.14,1612.072,1637,1649Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_3B"
                    className={classNames({highlight : this.state.keys.__3B})}
                    data-name="3B">
                    <path
                      id="__3B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-10", {highlight : this.state.keys.__3B})
                      }
                      d="M1874,1238l-226-61c7.136-26.079,23.65-139.167,25.51-174.51-1.4-29.565-16.255-140.064-23.51-174.49l225-57c16.5,73.384,33.974,184.425,31,229C1903.9,1062.046,1888.467,1184.644,1874,1238Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_2B"
                    className={classNames({highlight : this.state.keys.__2B})}
                    data-name="2B">
                    <path
                      id="__2B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-11", {highlight : this.state.keys.__2B})
                      }
                      d="M1874,770l-224,61c-7.173-26.069-42.563-118.657-59-150-16.292-24.71-93.192-134.1-117-160l164-163c51.636,54.691,138.81,165.149,159,205C1826.856,617.431,1859.213,716.732,1874,770Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_1B"
                    className={classNames({highlight : this.state.keys.__1B})}
                    data-name="1B">
                    <path
                      id="__1B"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-12", {highlight : this.state.keys.__1B})
                      }
                      d="M1639,357,1474,522c-18.015-20.163-101.342-83.232-130-104-25.579-14.891-137.158-59.381-170-72l62-221c70.567,26.032,194.2,69.28,230,96C1516.942,256.483,1602.072,315.86,1639,357Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_12A"
                    className={classNames({highlight : this.state.keys.__12A})}
                    data-name="12A">
                    <path
                      id="__12A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-13", {highlight : this.state.keys.__12A})
                      }
                      d="M1174,346l-82,294c-26.079-7.136-57.657-11.14-93-13q-44.348,2.1-96,13L823,342c73.384-16.5,133.425-23.974,178-21Q1094.069,324.153,1174,346Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_11A"
                    className={classNames({highlight : this.state.keys.__11A})}
                    data-name="11A">
                    <path
                      id="__11A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-14", {highlight : this.state.keys.__11A})
                      }
                      d="M820,344l83.576,296.447c-25.573,6.684-52.547,17.49-83.227,33.164C796.189,689.227,766.269,711.052,741,734L516,518c53.339-49.792,107.63-95.7,146.645-114.936C715.915,374.561,767.746,357.786,820,344Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_10A"
                    className={classNames({highlight : this.state.keys.__10A})}
                    data-name="10A">
                    <path
                      id="__10A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-15", {highlight : this.state.keys.__10A})
                      }
                      d="M513,521,738.686,737.671c-19.352,18.645-37.9,41.639-57.306,70.8C667.725,834.328,654.994,869.085,644,902L336,822c22.534-70.676,45.972-138.541,71-175C440.059,595.236,473.522,559.211,513,521Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_9A"
                    className={classNames({highlight : this.state.keys.__9A})}
                    data-name="9A">
                    <path
                      id="__9A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-15", {highlight : this.state.keys.__9A})
                      }
                      d="M336,822l307,83c-7.371,25.842-11.858,55.039-14,90,1.179,29.222,5.976,57.016,13,91l-304.87,84.661C321.122,1098.228,307.667,1037.1,311,993,313.591,931.634,321.052,874.869,336,822Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_8A"
                    className={classNames({highlight : this.state.keys.__8A})}
                    data-name="8A">
                    <path
                      id="__8A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-16", {highlight : this.state.keys.__8A})
                      }
                      d="M333,1171l309-85c6.684,25.574,22.326,59.319,38,90,15.616,24.159,36.052,53.731,59,79L514,1482c-49.792-53.339-97.857-113.787-117.093-152.8C368.4,1275.928,346.786,1223.254,333,1171Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_7A"
                    className={classNames({highlight : this.state.keys.__7A})}
                    data-name="7A">
                    <path
                      id="__7A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-17", {highlight : this.state.keys.__7A})
                      }
                      d="M514,1482l225-227c18.645,19.352,48.844,38.59,78,58a571.765,571.765,0,0,0,87,37l-83,309c-70.676-22.534-135.7-45.129-172.157-70.157C597.079,1555.784,552.211,1521.478,514,1482Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_6A"
                    className={classNames({highlight : this.state.keys.__6A})}
                    data-name="6A">
                    <path
                      id="__6A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-18", {highlight : this.state.keys.__6A})
                      }
                      d="M821,1657l88-305c26.079,7.136,55.657,9.14,91,11,29.565-1.4,62.574-5.745,97-13l80,304.361c-73.384,16.5-133.425,27.613-178,24.639C936.954,1676.9,874.356,1671.467,821,1657Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_5A"
                    className={classNames({highlight : this.state.keys.__5A})}
                    data-name="5A">
                    <path
                      id="__5A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-19", {highlight : this.state.keys.__5A})
                      }
                      d="M1177,1654l-79-303.447c25.574-6.684,52.547-17.49,83.228-33.164,24.159-15.616,54.079-37.441,79.348-60.389L1474,1479c-53.339,49.792-96.054,89.7-135.069,108.936C1285.662,1616.439,1229.254,1640.214,1177,1654Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_4A"
                    className={classNames({highlight : this.state.keys.__4A})}
                    data-name="4A">
                    <path
                      id="__4A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-20", {highlight : this.state.keys.__4A})
                      }
                      d="M1472.686,1478,1261,1253c19.352-18.645,37.59-45.844,57-75,13.656-25.862,24.006-48.085,35-81l296.686,80c-22.534,70.676-36.658,113.541-61.686,150C1554.941,1378.764,1512.164,1439.789,1472.686,1478Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_3A"
                    className={classNames({highlight : this.state.keys.__3A})}
                    data-name="3A">
                    <path
                      id="__3A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-21", {highlight : this.state.keys.__3A})
                      }
                      d="M1649,1178l-297-80a481.528,481.528,0,0,0,16.4-96.357c-1.165-28.872-5.226-61.086-12.165-94.662L1650,827c15.816,71.564,25.293,127.432,22,171C1669.44,1058.629,1663.769,1125.766,1649,1178Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_2A"
                    className={classNames({highlight : this.state.keys.__2A})}
                    data-name="2A">
                    <path
                      id="__2A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-22", {highlight : this.state.keys.__2A})
                      }
                      d="M1650,827l-294,77c-6.684-25.574-24.326-64.319-40-95-15.616-24.159-34.052-50.731-57-76l213-210c49.792,53.339,86.764,95.985,106,135C1606.5,711.269,1636.214,774.746,1650,827Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="_1A"
                    className={classNames({highlight : this.state.keys.__1A})}
                    data-name="1A">
                    <path
                      id="__1A"
                      onClick={this.showCompatibleKeys}
                      onDoubleClick={this.deselectKeys}
                      className={
                        classNames("cls-23", {highlight : this.state.keys.__1A})
                      }
                      d="M1472,523,1259,733c-18.645-19.352-46.844-37.59-76-57-25.862-13.656-59.242-26.163-92.157-37.157L1174,347c70.676,22.534,120.541,38.972,157,64C1382.764,444.059,1433.789,483.522,1472,523Z"
                      transform="translate(-73 -85)"/>
                  </g>
                  <g
                    id="E">
                    <text
                      className="cls-24"
                      transform="translate(902.759 130.9) scale(0.977 1)">E
                    </text>
                  </g>
                  <g
                    id="A">
                    <text
                      className="cls-24"
                      transform="translate(480.088 233.906) rotate(-0.013) scale(0.977 1)">A
                    </text>
                  </g>
                  <g
                    id="D">
                    <text
                      className="cls-24"
                      transform="matrix(0.977, -0.001, 0.001, 1, 180.082, 530.584)">D
                    </text>
                  </g>
                  <g
                    id="G">
                    <text
                      className="cls-24"
                      transform="translate(52.05 951.752) scale(0.977 1)">G
                    </text>
                  </g>
                  <g
                    id="C">
                    <text
                      className="cls-24"
                      transform="translate(180.051 1341.001) scale(0.977 1)">C
                    </text>
                  </g>
                  <g
                    id="F">
                    <text
                      className="cls-24"
                      transform="translate(484.572 1651.002) scale(0.977 1)">F
                    </text>
                  </g>
                  <g
                    id="Bb">
                    <text
                      className="cls-24"
                      transform="translate(882.445 1746.812) scale(0.977 1)">B
                      <tspan
                        className="cls-25"
                        x="51.187"
                        y="0">♭</tspan>
                    </text>
                  </g>
                  <g
                    id="Eb">
                    <text
                      className="cls-24"
                      transform="translate(1277.844 1646.71) scale(0.977 1)">E
                      <tspan
                        className="cls-25"
                        x="45.404"
                        y="0">♭</tspan>
                    </text>
                  </g>
                  <g
                    id="Ab">
                    <text
                      className="cls-24"
                      transform="translate(1549.186 1336.71) scale(0.977 1)">A
                      <tspan
                        className="cls-25"
                        x="52.377"
                        y="0">♭</tspan>
                    </text>
                  </g>
                  <g
                    id="Db">
                    <text
                      className="cls-24"
                      transform="translate(1659.563 947.46) scale(0.977 1)">D
                      <tspan
                        className="cls-25"
                        x="55.699"
                        y="0">♭</tspan>
                    </text>
                  </g>
                  <g
                    id="F_"
                    data-name="F#">
                    <text
                      className="cls-24"
                      transform="translate(1553.676 526.255) scale(0.977 1)">F
                      <tspan
                        className="cls-25"
                        x="43.189"
                        y="0">♯</tspan>
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="B">
                    <text
                      className="cls-24"
                      transform="translate(1292.505 233.9) scale(0.977 1)">B
                    </text>
                  </g>
                  <g
                    id="Dbm">
                    <text
                      className="cls-24"
                      transform="translate(845.624 429.9) scale(0.977 1)">D
                      <tspan
                        className="cls-26"
                        x="55.699"
                        y="0">♭</tspan>
                      <tspan
                        x="91.483"
                        y="0">m
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="F_m"
                    data-name="F#m">
                    <text
                      className="cls-24"
                      transform="translate(584.767 488.9) scale(0.977 1)">F
                      <tspan
                        className="cls-25"
                        x="43.189"
                        y="0">♯</tspan>
                      <tspan
                        x="78.973"
                        y="0">m
                      </tspan>
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Bm">
                    <text
                      className="cls-24"
                      transform="translate(385.1 655.9) scale(0.977 1)">Bm
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Em">
                    <text
                      className="cls-24"
                      transform="translate(318.369 951.752) scale(0.977 1)">Em
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Am">
                    <text
                      className="cls-24"
                      transform="translate(384.519 1198.9) scale(0.977 1)">Am
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Dm">
                    <text
                      className="cls-24"
                      transform="translate(596.141 1395.9) scale(0.977 1)">Dm
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Gm">
                    <text
                      className="cls-24"
                      transform="translate(863.111 1473.9) scale(0.977 1)">Gm
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Cm">
                    <text
                      className="cls-24"
                      transform="translate(1130.318 1396.9) scale(0.977 1)">Cm
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Fm">
                    <text
                      x="-73"
                      y="-85"/>
                    <text
                      className="cls-24"
                      transform="translate(1325.552 1198.9) scale(0.977 1)">Fm
                    </text>
                  </g>
                  <g
                    id="Bbm">
                    <text
                      className="cls-24"
                      transform="translate(1351.369 947.46) scale(0.977 1)">B
                      <tspan
                        className="cls-25"
                        x="51.187"
                        y="0">♭</tspan>
                      <tspan
                        x="86.971"
                        y="0">m
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="Ebm">
                    <text
                      className="cls-27"
                      transform="translate(1306.981 658.49) scale(1.024 1)">E
                      <tspan
                        className="cls-25"
                        x="43.328"
                        y="0">♭</tspan>
                      <tspan
                        x="77.475"
                        y="0">m
                      </tspan>
                    </text>
                    <text
                      x="-73"
                      y="-85"/>
                  </g>
                  <g
                    id="Abm">
                    <text
                      className="cls-24"
                      transform="translate(1114.454 488.9) scale(0.977 1)">A
                      <tspan
                        className="cls-25"
                        x="52.377"
                        y="0">♭</tspan>
                      <tspan
                        x="88.16"
                        y="0">m
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="_12a_text"
                    data-name="12a text">
                    <text
                      className="cls-28"
                      transform="translate(882.459 488.9) scale(0.977 1)">12A
                    </text>
                  </g>
                  <g
                    id="_11a_text"
                    data-name="11a text">
                    <text
                      className="cls-28"
                      transform="translate(618.192 549.9) scale(0.977 1)">11A
                    </text>
                  </g>
                  <g
                    id="_10a_text"
                    data-name="10a text">
                    <text
                      className="cls-29"
                      transform="translate(399.43 718.39) scale(0.977 1)">10A
                    </text>
                  </g>
                  <g
                    id="_9a_text"
                    data-name="9a text">
                    <text
                      className="cls-29"
                      transform="translate(341.157 1001.14) scale(0.977 1)">9A
                    </text>
                  </g>
                  <g
                    id="_8a_text"
                    data-name="8a text">
                    <text
                      className="cls-30"
                      transform="translate(411.014 1253.39) scale(0.977 1)">8A
                    </text>
                  </g>
                  <g
                    id="_7a_text"
                    data-name="7a text">
                    <text
                      className="cls-30"
                      transform="translate(624.936 1446.39) scale(0.977 1)">7A
                    </text>
                  </g>
                  <g
                    id="_6a_text"
                    data-name="6a text">
                    <text
                      className="cls-29"
                      transform="translate(890.657 1530.39) scale(0.977 1)">6A
                    </text>
                  </g>
                  <g
                    id="_5a_text"
                    data-name="5a text">
                    <text
                      className="cls-30"
                      transform="translate(1159.113 1446.39) scale(0.977 1)">5A
                    </text>
                  </g>
                  <g
                    id="_4a_text"
                    data-name="4a text">
                    <text
                      className="cls-29"
                      transform="translate(1347.363 1253.39) scale(0.977 1)">4A
                    </text>
                  </g>
                  <g
                    id="_3a_text"
                    data-name="3a text">
                    <text
                      className="cls-29"
                      transform="translate(1393.927 1001.14) scale(0.977 1)">3A
                    </text>
                  </g>
                  <g
                    id="_2a_text"
                    data-name="2a text">
                    <text
                      className="cls-29"
                      transform="translate(1348.989 713.39) scale(0.977 1)">2A
                    </text>
                  </g>
                  <g
                    id="_1a_text"
                    data-name="1a text">
                    <text
                      className="cls-29"
                      transform="translate(1162.572 543.39) scale(0.977 1)">1A
                    </text>
                  </g>
                  <g
                    id="_1b_text"
                    data-name="1b text">
                    <text
                      className="cls-29"
                      transform="translate(1289.106 290.39) scale(0.977 1)">1B
                    </text>
                  </g>
                  <g
                    id="_2b_text"
                    data-name="2b text">
                    <text
                      className="cls-29"
                      transform="translate(1561.152 586.89) scale(0.977 1)">2B
                    </text>
                  </g>
                  <g
                    id="_3b_text"
                    data-name="3b text">
                    <text
                      className="cls-29"
                      transform="translate(1671.194 1001.14) scale(0.977 1)">3B
                    </text>
                  </g>
                  <g
                    id="_4b_text"
                    data-name="4b text">
                    <text
                      className="cls-29"
                      transform="translate(1559.526 1381.89) scale(0.977 1)">4B
                    </text>
                  </g>
                  <g
                    id="_5b_text"
                    data-name="5b text">
                    <text
                      className="cls-30"
                      transform="translate(1285.647 1699.89) scale(0.977 1)">5B
                    </text>
                  </g>
                  <g
                    id="_6b_text"
                    data-name="6b text">
                    <text
                      className="cls-29"
                      transform="translate(891.826 1801.39) scale(0.977 1)">6B
                    </text>
                  </g>
                  <g
                    id="_7b_text"
                    data-name="7b text">
                    <text
                      className="cls-30"
                      transform="translate(473.804 1699.89) scale(0.977 1)">7B
                    </text>
                  </g>
                  <g
                    id="_8b_text"
                    data-name="8b text">
                    <text
                      className="cls-30"
                      transform="translate(174.721 1381.89) scale(0.977 1)">8B
                    </text>
                  </g>
                  <g
                    id="_9b_text"
                    data-name="9b text">
                    <text
                      className="cls-29"
                      transform="translate(46.423 1001.14) scale(0.977 1)">9B
                    </text>
                  </g>
                  <g
                    id="_10b_text"
                    data-name="10b text">
                    <text
                      className="cls-29"
                      transform="translate(163.136 586.89) scale(0.977 1)">10B
                    </text>
                  </g>
                  <g
                    id="_11b_text"
                    data-name="11b text">
                    <text
                      className="cls-28"
                      transform="translate(467.06 290.9) scale(0.977 1)">11B
                    </text>
                  </g>
                  <g
                    id="_12b_text"
                    data-name="12b text">
                    <text
                      className="cls-28"
                      transform="translate(883.627 199.9) scale(0.977 1)">12B
                    </text>
                  </g>
                  <g
                    id="wheel">
                    <g>
                      <path
                        className="cls-31"
                        d="M992,1919c-123.523,0-243.352-24.192-356.16-71.9a918.223,918.223,0,0,1-486.934-486.937C101.192,1247.353,77,1127.523,77,1004s24.192-243.353,71.906-356.16A918.222,918.222,0,0,1,635.84,160.906C748.647,113.192,868.476,89,992,89s243.353,24.192,356.158,71.906A918.223,918.223,0,0,1,1835.1,647.84C1882.808,760.648,1907,880.477,1907,1004s-24.192,243.352-71.9,356.158A918.224,918.224,0,0,1,1348.158,1847.1C1235.352,1894.808,1115.522,1919,992,1919Zm-17.756-1.167q8.865.166,17.756.167c123.388,0,243.086-24.166,355.77-71.827a917.218,917.218,0,0,0,486.4-486.4C1881.834,1247.086,1906,1127.388,1906,1004l-.005,2.92-1,0q-.019,6.306-.123,12.591l1,.016a925.8,925.8,0,0,1-9.063,114.937l-.291,2.025-.99-.142,0,.014.991.143-.332,2.272-.99-.146a912.751,912.751,0,0,1-768.568,768.568l.146.99-2.272.332-.143-.991-.014,0,.142.99-2.025.291a925.8,925.8,0,0,1-114.937,9.063l-.016-1q-6.292.1-12.59.123l0,1c-1.941.006-3.89.006-5.832,0l0-1q-7.522-.022-15.035-.166l.208,0Zm-2.129-.043c.653.014,1.308.027,1.961.039Zm-4.531-.106c1.455.038,2.918.072,4.374.1l.021-1,.16,0c-.668-.014-1.326-.028-1.993-.044l-.023,1Zm-4.074-.116q2.034.063,4.071.116l.026-1,.082,0-.916-.024-.022,1-.38-.01,0-1q-8.236-.225-16.444-.594,2.855.129,5.71.239l-.039,1,.864.033.038-1h0l.079,0q1.712.066,3.42.123,1.77.062,3.538.114Zm-81.093-6.029q34.419,4.1,69.314,5.6C928.579,1916.141,905.3,1914.261,882.417,1911.539Zm67.337,4.51.111.005ZM992,92c-123.12,0-242.556,24.113-354.991,71.669a915.214,915.214,0,0,0-485.34,485.34C104.113,761.444,80,880.88,80,1004s24.113,242.556,71.669,354.992a915.211,915.211,0,0,0,485.34,485.338C749.443,1891.887,868.88,1916,992,1916s242.557-24.113,354.992-71.67a915.207,915.207,0,0,0,485.338-485.338C1879.887,1246.557,1904,1127.12,1904,1004s-24.113-242.557-71.67-354.991a915.211,915.211,0,0,0-485.338-485.34C1234.556,116.113,1115.12,92,992,92ZM877.153,1910.9l.044.006.124-.992q2.264.283,4.533.554-2.365-.283-4.731-.579l.153.019Zm-.924-.116.867.11Zm-1.552-.2,1.487.188.126-.992.225.029-1.745-.221.034,0Zm-8.831-1.172c2.926.4,5.844.79,8.776,1.165l-2.357-.305.13-.991-.144-.019.081.01-.129.993-1.242-.163.132-.992c-.882-.116-1.761-.233-2.643-.352l-.132.991-.471-.064.137-.991a914.662,914.662,0,0,1-717.236-549.312q-13.421-31.729-24.349-64.178l-.948.319A911.144,911.144,0,0,1,78,1006.054c.267,122.662,24.429,241.659,71.825,353.716a913.683,913.683,0,0,0,715.525,549.574l.131-.991.5.069ZM79,1006.045v0Zm-1-.758c0,.249,0,.5,0,.752C78,1005.789,78,1005.537,78,1005.287Zm1-.148c0,.049,0,.09,0,.138C79,1005.225,79,1005.191,79,1005.139Zm-1-.159v0Zm1-.177v0Zm-1-.148v0Zm1-.2v0Zm-1-.126v0Zm1-.326v0Zm1826,0h0Zm.995-2.913L1906,1004q0-8.89-.167-17.756l-1,.019,0-.208q.144,7.5.166,15.036ZM79,1004h0Zm38.266-265.982A911.15,911.15,0,0,0,78,1004v-.361A911.146,911.146,0,0,1,117.266,738.018Zm1788.524,246.1.039,1.961C1905.817,985.423,1905.8,984.768,1905.79,984.115Zm-1.044-1.969c.016.667.03,1.325.044,1.993l0-.16,1-.021c-.031-1.456-.065-2.919-.1-4.374l.062,2.539Zm-.084-3.373c.008.307.016.609.024.916l0-.082,1-.026q-.054-2.037-.116-4.071l-1,.03q-.052-1.767-.114-3.538-.057-1.71-.123-3.42l0-.079h0l1-.038c-.011-.292-.021-.572-.033-.864l-1,.039q-.11-2.853-.239-5.71.371,8.223.594,16.47l1-.055-.5.014.5-.014-.5.014.5.012.01.38Zm-5.123-84.356c2.722,22.887,4.6,46.162,5.6,69.314Q1903.639,928.841,1899.539,894.417Zm4.51,67.337c0,.038,0,.074.005.111C1904.053,961.829,1904.051,961.791,1904.049,961.754Zm-6.164-72.631q.3,2.362.579,4.731-.272-2.268-.554-4.533l.992-.124-.006-.044-.992.123Zm.895-.894.11.867C1898.854,888.808,1898.816,888.516,1898.78,888.229Zm-1.192-1.459c.075.588.146,1.156.221,1.745l-.029-.225.992-.126c-.062-.494-.126-.994-.188-1.487l-.992.127Zm.684-2.5.305,2.357c-.375-2.932-.763-5.85-1.165-8.776l-.99.137-.069-.5.991-.131A913.319,913.319,0,0,0,996.854,90.013a910.983,910.983,0,0,1,286.669,47.438l-.319.948q32.439,10.928,64.178,24.349a912.655,912.655,0,0,1,549.312,717.236l.991-.137.064.471-.991.132c.119.882.236,1.761.352,2.643l.992-.132.163,1.242-.993.129-.01-.081c.007.052.012.093.019.144ZM631.863,163.687A917.282,917.282,0,0,0,151.687,643.863c7.258-16.914,15.054-33.67,23.322-50.135q9.83-19.572,20.516-38.532l.871.492q-.5.894-1.006,1.79c.353-.629.7-1.252,1.057-1.88l-.871-.491.456-.808.87.493.258-.455-.872-.49.121-.214.872.49-.052.09A919.052,919.052,0,0,1,542.213,209.229l-.09.052-.49-.872.214-.121.49.872.455-.258-.493-.87.808-.456.491.871,1.88-1.057q-.9.5-1.79,1.006l-.492-.871q18.925-10.669,38.532-20.516C598.193,178.741,614.949,170.945,631.863,163.687ZM992,90a911.15,911.15,0,0,0-265.982,39.266A911.146,911.146,0,0,1,991.639,90Zm4.737,1.012h0Zm-.375,0h0ZM992,91c1.437,0,2.864,0,4.3.01-1.315-.006-2.624-.01-3.939-.01V90H992Zm4.626-.989h0Zm-.3,0ZM876.064,1910.76l.174-.986h0ZM1897.775,888.243l.984-.184v0Z"

                        transform="translate(-73 -85)"/>
                      <path
                        className="cls-32"
                        d="M992,1919c-123.523,0-243.352-24.192-356.16-71.9a918.223,918.223,0,0,1-486.934-486.937C101.192,1247.353,77,1127.523,77,1004s24.192-243.353,71.906-356.16A918.222,918.222,0,0,1,635.84,160.906C748.647,113.192,868.476,89,992,89s243.353,24.192,356.158,71.906A918.223,918.223,0,0,1,1835.1,647.84C1882.808,760.648,1907,880.477,1907,1004s-24.192,243.352-71.9,356.158A918.224,918.224,0,0,1,1348.158,1847.1C1235.352,1894.808,1115.522,1919,992,1919Zm-17.756-1.167q8.865.166,17.756.167c123.388,0,243.086-24.166,355.77-71.827a917.218,917.218,0,0,0,486.4-486.4C1881.834,1247.086,1906,1127.388,1906,1004l-.005,2.92-1,0q-.019,6.306-.123,12.591l1,.016a925.8,925.8,0,0,1-9.063,114.937l-.291,2.025-.99-.142,0,.014.991.143-.332,2.272-.99-.146a912.751,912.751,0,0,1-768.568,768.568l.146.99-2.272.332-.143-.991-.014,0,.142.99-2.025.291a925.8,925.8,0,0,1-114.937,9.063l-.016-1q-6.292.1-12.59.123l0,1c-1.941.006-3.89.006-5.832,0l0-1q-7.522-.022-15.035-.166l.208,0Zm-2.129-.043c.653.014,1.308.027,1.961.039Zm-4.531-.106c1.455.038,2.918.072,4.374.1l.021-1,.16,0c-.668-.014-1.326-.028-1.993-.044l-.023,1Zm-4.074-.116q2.034.063,4.071.116l.026-1,.082,0-.916-.024-.022,1-.38-.01,0-1q-8.236-.225-16.444-.594,2.855.129,5.71.239l-.039,1,.864.033.038-1h0l.079,0q1.712.066,3.42.123,1.77.062,3.538.114Zm-81.093-6.029q34.419,4.1,69.314,5.6C928.579,1916.141,905.3,1914.261,882.417,1911.539Zm67.337,4.51.111.005ZM992,92c-123.12,0-242.556,24.113-354.991,71.669a915.214,915.214,0,0,0-485.34,485.34C104.113,761.444,80,880.88,80,1004s24.113,242.556,71.669,354.992a915.211,915.211,0,0,0,485.34,485.338C749.443,1891.887,868.88,1916,992,1916s242.557-24.113,354.992-71.67a915.207,915.207,0,0,0,485.338-485.338C1879.887,1246.557,1904,1127.12,1904,1004s-24.113-242.557-71.67-354.991a915.211,915.211,0,0,0-485.338-485.34C1234.556,116.113,1115.12,92,992,92ZM877.153,1910.9l.044.006.124-.992q2.264.283,4.533.554-2.365-.283-4.731-.579l.153.019Zm-.924-.116.867.11Zm-1.552-.2,1.487.188.126-.992.225.029-1.745-.221.034,0Zm-8.831-1.172c2.926.4,5.844.79,8.776,1.165l-2.357-.305.13-.991-.144-.019.081.01-.129.993-1.242-.163.132-.992c-.882-.116-1.761-.233-2.643-.352l-.132.991-.471-.064.137-.991a914.662,914.662,0,0,1-717.236-549.312q-13.421-31.729-24.349-64.178l-.948.319A911.144,911.144,0,0,1,78,1006.054c.267,122.662,24.429,241.659,71.825,353.716a913.683,913.683,0,0,0,715.525,549.574l.131-.991.5.069ZM79,1006.045v0Zm-1-.758c0,.249,0,.5,0,.752C78,1005.789,78,1005.537,78,1005.287Zm1-.148c0,.049,0,.09,0,.138C79,1005.225,79,1005.191,79,1005.139Zm-1-.159v0Zm1-.177v0Zm-1-.148v0Zm1-.2v0Zm-1-.126v0Zm1-.326v0Zm1826,0h0Zm.995-2.913L1906,1004q0-8.89-.167-17.756l-1,.019,0-.208q.144,7.5.166,15.036ZM79,1004h0Zm38.266-265.982A911.15,911.15,0,0,0,78,1004v-.361A911.146,911.146,0,0,1,117.266,738.018Zm1788.524,246.1.039,1.961C1905.817,985.423,1905.8,984.768,1905.79,984.115Zm-1.044-1.969c.016.667.03,1.325.044,1.993l0-.16,1-.021c-.031-1.456-.065-2.919-.1-4.374l.062,2.539Zm-.084-3.373c.008.307.016.609.024.916l0-.082,1-.026q-.054-2.037-.116-4.071l-1,.03q-.052-1.767-.114-3.538-.057-1.71-.123-3.42l0-.079h0l1-.038c-.011-.292-.021-.572-.033-.864l-1,.039q-.11-2.853-.239-5.71.371,8.223.594,16.47l1-.055-.5.014.5-.014-.5.014.5.012.01.38Zm-5.123-84.356c2.722,22.887,4.6,46.162,5.6,69.314Q1903.639,928.841,1899.539,894.417Zm4.51,67.337c0,.038,0,.074.005.111C1904.053,961.829,1904.051,961.791,1904.049,961.754Zm-6.164-72.631q.3,2.362.579,4.731-.272-2.268-.554-4.533l.992-.124-.006-.044-.992.123Zm.895-.894.11.867C1898.854,888.808,1898.816,888.516,1898.78,888.229Zm-1.192-1.459c.075.588.146,1.156.221,1.745l-.029-.225.992-.126c-.062-.494-.126-.994-.188-1.487l-.992.127Zm.684-2.5.305,2.357c-.375-2.932-.763-5.85-1.165-8.776l-.99.137-.069-.5.991-.131A913.319,913.319,0,0,0,996.854,90.013a910.983,910.983,0,0,1,286.669,47.438l-.319.948q32.439,10.928,64.178,24.349a912.655,912.655,0,0,1,549.312,717.236l.991-.137.064.471-.991.132c.119.882.236,1.761.352,2.643l.992-.132.163,1.242-.993.129-.01-.081c.007.052.012.093.019.144ZM631.863,163.687A917.282,917.282,0,0,0,151.687,643.863c7.258-16.914,15.054-33.67,23.322-50.135q9.83-19.572,20.516-38.532l.871.492q-.5.894-1.006,1.79c.353-.629.7-1.252,1.057-1.88l-.871-.491.456-.808.87.493.258-.455-.872-.49.121-.214.872.49-.052.09A919.052,919.052,0,0,1,542.213,209.229l-.09.052-.49-.872.214-.121.49.872.455-.258-.493-.87.808-.456.491.871,1.88-1.057q-.9.5-1.79,1.006l-.492-.871q18.925-10.669,38.532-20.516C598.193,178.741,614.949,170.945,631.863,163.687ZM992,90a911.15,911.15,0,0,0-265.982,39.266A911.146,911.146,0,0,1,991.639,90Zm4.737,1.012h0Zm-.375,0h0ZM992,91c1.437,0,2.864,0,4.3.01-1.315-.006-2.624-.01-3.939-.01V90H992Zm4.626-.989h0Zm-.3,0ZM876.064,1910.76l.174-.986h0ZM1897.775,888.243l.984-.184v0Z"

                        transform="translate(-73 -85)"/>
                      <path
                        className="cls-33"
                        d="M992,1919c-123.523,0-243.352-24.192-356.16-71.9a918.223,918.223,0,0,1-486.934-486.937C101.192,1247.353,77,1127.523,77,1004s24.192-243.353,71.906-356.16A918.222,918.222,0,0,1,635.84,160.906C748.647,113.192,868.476,89,992,89s243.353,24.192,356.158,71.906A918.223,918.223,0,0,1,1835.1,647.84C1882.808,760.648,1907,880.477,1907,1004s-24.192,243.352-71.9,356.158A918.224,918.224,0,0,1,1348.158,1847.1C1235.352,1894.808,1115.522,1919,992,1919Zm-17.756-1.167q8.865.166,17.756.167c123.388,0,243.086-24.166,355.77-71.827a917.218,917.218,0,0,0,486.4-486.4C1881.834,1247.086,1906,1127.388,1906,1004l-.005,2.92-1,0q-.019,6.306-.123,12.591l1,.016a925.8,925.8,0,0,1-9.063,114.937l-.291,2.025-.99-.142,0,.014.991.143-.332,2.272-.99-.146a912.751,912.751,0,0,1-768.568,768.568l.146.99-2.272.332-.143-.991-.014,0,.142.99-2.025.291a925.8,925.8,0,0,1-114.937,9.063l-.016-1q-6.292.1-12.59.123l0,1c-1.941.006-3.89.006-5.832,0l0-1q-7.522-.022-15.035-.166l.208,0Zm-2.129-.043c.653.014,1.308.027,1.961.039Zm-4.531-.106c1.455.038,2.918.072,4.374.1l.021-1,.16,0c-.668-.014-1.326-.028-1.993-.044l-.023,1Zm-4.074-.116q2.034.063,4.071.116l.026-1,.082,0-.916-.024-.022,1-.38-.01,0-1q-8.236-.225-16.444-.594,2.855.129,5.71.239l-.039,1,.864.033.038-1h0l.079,0q1.712.066,3.42.123,1.77.062,3.538.114Zm-81.093-6.029q34.419,4.1,69.314,5.6C928.579,1916.141,905.3,1914.261,882.417,1911.539Zm67.337,4.51.111.005ZM992,92c-123.12,0-242.556,24.113-354.991,71.669a915.214,915.214,0,0,0-485.34,485.34C104.113,761.444,80,880.88,80,1004s24.113,242.556,71.669,354.992a915.211,915.211,0,0,0,485.34,485.338C749.443,1891.887,868.88,1916,992,1916s242.557-24.113,354.992-71.67a915.207,915.207,0,0,0,485.338-485.338C1879.887,1246.557,1904,1127.12,1904,1004s-24.113-242.557-71.67-354.991a915.211,915.211,0,0,0-485.338-485.34C1234.556,116.113,1115.12,92,992,92ZM877.153,1910.9l.044.006.124-.992q2.264.283,4.533.554-2.365-.283-4.731-.579l.153.019Zm-.924-.116.867.11Zm-1.552-.2,1.487.188.126-.992.225.029-1.745-.221.034,0Zm-8.831-1.172c2.926.4,5.844.79,8.776,1.165l-2.357-.305.13-.991-.144-.019.081.01-.129.993-1.242-.163.132-.992c-.882-.116-1.761-.233-2.643-.352l-.132.991-.471-.064.137-.991a914.662,914.662,0,0,1-717.236-549.312q-13.421-31.729-24.349-64.178l-.948.319A911.144,911.144,0,0,1,78,1006.054c.267,122.662,24.429,241.659,71.825,353.716a913.683,913.683,0,0,0,715.525,549.574l.131-.991.5.069ZM79,1006.045v0Zm-1-.758c0,.249,0,.5,0,.752C78,1005.789,78,1005.537,78,1005.287Zm1-.148c0,.049,0,.09,0,.138C79,1005.225,79,1005.191,79,1005.139Zm-1-.159v0Zm1-.177v0Zm-1-.148v0Zm1-.2v0Zm-1-.126v0Zm1-.326v0Zm1826,0h0Zm.995-2.913L1906,1004q0-8.89-.167-17.756l-1,.019,0-.208q.144,7.5.166,15.036ZM79,1004h0Zm38.266-265.982A911.15,911.15,0,0,0,78,1004v-.361A911.146,911.146,0,0,1,117.266,738.018Zm1788.524,246.1.039,1.961C1905.817,985.423,1905.8,984.768,1905.79,984.115Zm-1.044-1.969c.016.667.03,1.325.044,1.993l0-.16,1-.021c-.031-1.456-.065-2.919-.1-4.374l.062,2.539Zm-.084-3.373c.008.307.016.609.024.916l0-.082,1-.026q-.054-2.037-.116-4.071l-1,.03q-.052-1.767-.114-3.538-.057-1.71-.123-3.42l0-.079h0l1-.038c-.011-.292-.021-.572-.033-.864l-1,.039q-.11-2.853-.239-5.71.371,8.223.594,16.47l1-.055-.5.014.5-.014-.5.014.5.012.01.38Zm-5.123-84.356c2.722,22.887,4.6,46.162,5.6,69.314Q1903.639,928.841,1899.539,894.417Zm4.51,67.337c0,.038,0,.074.005.111C1904.053,961.829,1904.051,961.791,1904.049,961.754Zm-6.164-72.631q.3,2.362.579,4.731-.272-2.268-.554-4.533l.992-.124-.006-.044-.992.123Zm.895-.894.11.867C1898.854,888.808,1898.816,888.516,1898.78,888.229Zm-1.192-1.459c.075.588.146,1.156.221,1.745l-.029-.225.992-.126c-.062-.494-.126-.994-.188-1.487l-.992.127Zm.684-2.5.305,2.357c-.375-2.932-.763-5.85-1.165-8.776l-.99.137-.069-.5.991-.131A913.319,913.319,0,0,0,996.854,90.013a910.983,910.983,0,0,1,286.669,47.438l-.319.948q32.439,10.928,64.178,24.349a912.655,912.655,0,0,1,549.312,717.236l.991-.137.064.471-.991.132c.119.882.236,1.761.352,2.643l.992-.132.163,1.242-.993.129-.01-.081c.007.052.012.093.019.144ZM631.863,163.687A917.282,917.282,0,0,0,151.687,643.863c7.258-16.914,15.054-33.67,23.322-50.135q9.83-19.572,20.516-38.532l.871.492q-.5.894-1.006,1.79c.353-.629.7-1.252,1.057-1.88l-.871-.491.456-.808.87.493.258-.455-.872-.49.121-.214.872.49-.052.09A919.052,919.052,0,0,1,542.213,209.229l-.09.052-.49-.872.214-.121.49.872.455-.258-.493-.87.808-.456.491.871,1.88-1.057q-.9.5-1.79,1.006l-.492-.871q18.925-10.669,38.532-20.516C598.193,178.741,614.949,170.945,631.863,163.687ZM992,90a911.15,911.15,0,0,0-265.982,39.266A911.146,911.146,0,0,1,991.639,90Zm4.737,1.012h0Zm-.375,0h0ZM992,91c1.437,0,2.864,0,4.3.01-1.315-.006-2.624-.01-3.939-.01V90H992Zm4.626-.989h0Zm-.3,0ZM876.064,1910.76l.174-.986h0ZM1897.775,888.243l.984-.184v0Z"

                        transform="translate(-73 -85)"/>
                    </g>
                    <g>
                      <path
                        className="cls-31"
                        d="M991.5,1681a678.374,678.374,0,1,1,264.88-53.477A676.248,676.248,0,0,1,991.5,1681Zm-13.205-.868q6.593.124,13.205.124A679.192,679.192,0,0,0,1671.256,1000.5l0,2.172-.744,0q-.015,4.689-.092,9.364l.744.012a688.176,688.176,0,0,1-6.741,85.48q-.107.755-.216,1.506l-.736-.106,0,.011.737.106-.247,1.69-.736-.109a678.832,678.832,0,0,1-571.6,571.6l.109.736-1.69.247-.106-.737-.011,0,.106.736q-.751.11-1.506.216a688.176,688.176,0,0,1-85.48,6.741l-.012-.744q-4.68.078-9.364.092l0,.744c-1.444,0-2.893,0-4.337,0l0-.744q-5.6-.016-11.182-.124l.155,0Zm-1.584-.032,1.459.029Zm-3.37-.079c1.083.028,2.171.054,3.253.077l.016-.744.119,0-1.482-.032-.018.743Zm-3.03-.086q1.514.046,3.028.086l.02-.744.06,0-.681-.018-.016.743-.283-.007,0-.744q-6.126-.168-12.23-.442,2.124.1,4.246.178l-.029.743.643.025.029-.743h0l.058,0q1.272.048,2.544.091,1.316.046,2.631.085ZM910,1675.451q25.6,3.046,51.551,4.163C944.333,1678.873,927.023,1677.475,910,1675.451Zm50.08,3.354.083,0ZM991.5,322.231a676.141,676.141,0,1,0,264.013,53.3A674.028,674.028,0,0,0,991.5,322.231ZM906.086,1674.973l.033.005.093-.738q1.683.21,3.371.412-1.76-.212-3.519-.431l.114.014Zm-.687-.086.645.081Zm-1.154-.146,1.106.14.094-.738.167.021-1.3-.164.025,0Zm-6.568-.872c2.176.3,4.347.588,6.527.867l-1.753-.227.1-.737-.107-.015.06.008-.1.738-.923-.121.1-.737-1.966-.262-.1.737-.351-.048.1-.736A680.246,680.246,0,0,1,365.848,1264.8q-9.981-23.6-18.109-47.73l-.7.238a677.623,677.623,0,0,1-35.288-215.284A679.41,679.41,0,0,0,897.31,1673.818l.1-.737.371.052ZM312.489,1002.021v0Zm-.745-.564c0,.185,0,.375,0,.559C311.745,1001.831,311.745,1001.643,311.744,1001.457Zm.744-.11v0Zm-.744-.118v0Zm.744-.132v0Zm-.744-.11v0Zm.743-.151v0Zm-.743-.093v0Zm.743-.243v0Zm1358.026,0h0Zm.74-2.167,0,2.167q0-6.612-.124-13.205l-.744.014,0-.155q.108,5.582.124,11.182ZM312.487,1000.5h0Zm28.46-197.815a677.619,677.619,0,0,0-29.2,197.815v-.269A677.579,677.579,0,0,1,340.947,802.685ZM1671.1,985.711l.029,1.459Q1671.116,986.441,1671.1,985.711Zm-.776-1.464c.011.5.022.985.032,1.482l0-.119.744-.016c-.023-1.082-.049-2.17-.077-3.253l.046,1.888Zm-.063-2.509c.006.229.012.453.018.681l0-.06.744-.02q-.039-1.515-.086-3.028l-.743.023q-.039-1.314-.085-2.631-.042-1.272-.091-2.544l0-.058h0l.743-.029c-.008-.217-.016-.426-.025-.643l-.743.029q-.082-2.121-.178-4.246.276,6.115.442,12.249l.743-.041-.372.011.372-.011-.372.011.373.008.007.283ZM1666.451,919c2.024,17.022,3.422,34.332,4.163,51.551Q1669.5,944.6,1666.451,919Zm3.354,50.08c0,.028,0,.055,0,.083C1669.808,969.136,1669.807,969.109,1669.805,969.081Zm-4.584-54.017q.22,1.758.431,3.519-.2-1.687-.412-3.371l.738-.093-.005-.033-.738.092Zm.666-.665.081.645C1665.941,914.83,1665.914,914.612,1665.887,914.4Zm-.887-1.085c.056.438.109.86.164,1.3l-.021-.167.738-.094c-.046-.367-.094-.739-.14-1.106l-.738.094Zm.509-1.863.227,1.753c-.279-2.18-.567-4.351-.867-6.527l-.736.1-.052-.371.737-.1A679.249,679.249,0,0,0,995.11,320.753a677.547,677.547,0,0,1,213.2,35.281l-.238.7q24.126,8.126,47.73,18.109a678.764,678.764,0,0,1,408.533,533.42l.736-.1.048.351-.737.1c.088.656.175,1.31.262,1.966l.737-.1.121.923-.738.1-.008-.06.015.107Zm-941.848-535.9A682.185,682.185,0,0,0,366.546,732.661c5.4-12.58,11.2-25.042,17.345-37.287q7.31-14.556,15.258-28.656l.648.365q-.375.664-.749,1.332c.263-.469.523-.932.787-1.4l-.648-.365.339-.6.647.367c.063-.112.129-.227.192-.338l-.649-.365.09-.159.649.364-.038.068a683.476,683.476,0,0,1,256.57-256.57l-.068.038-.364-.649.159-.09.365.649.338-.192-.367-.647.6-.339.365.648c.467-.264.93-.524,1.4-.787q-.667.374-1.332.749l-.365-.648q14.075-7.935,28.656-15.258C698.619,386.742,711.081,380.944,723.661,375.546Zm267.839-54.8a677.619,677.619,0,0,0-197.815,29.2,677.579,677.579,0,0,1,197.546-29.2Zm3.523.752h0Zm-.279,0h0Zm-3.244-.008c1.069,0,2.13,0,3.2.008-.978,0-1.952-.007-2.929-.008v-.743H991.5Zm3.441-.735h0Zm-.227,0ZM905.277,1674.872l.129-.733h0ZM1665.14,914.41l.731-.137v0Z"

                        transform="translate(-73 -85)"/>
                      <path
                        className="cls-32"
                        d="M991.5,1681a678.374,678.374,0,1,1,264.88-53.477A676.248,676.248,0,0,1,991.5,1681Zm-13.205-.868q6.593.124,13.205.124A679.192,679.192,0,0,0,1671.256,1000.5l0,2.172-.744,0q-.015,4.689-.092,9.364l.744.012a688.176,688.176,0,0,1-6.741,85.48q-.107.755-.216,1.506l-.736-.106,0,.011.737.106-.247,1.69-.736-.109a678.832,678.832,0,0,1-571.6,571.6l.109.736-1.69.247-.106-.737-.011,0,.106.736q-.751.11-1.506.216a688.176,688.176,0,0,1-85.48,6.741l-.012-.744q-4.68.078-9.364.092l0,.744c-1.444,0-2.893,0-4.337,0l0-.744q-5.6-.016-11.182-.124l.155,0Zm-1.584-.032,1.459.029Zm-3.37-.079c1.083.028,2.171.054,3.253.077l.016-.744.119,0-1.482-.032-.018.743Zm-3.03-.086q1.514.046,3.028.086l.02-.744.06,0-.681-.018-.016.743-.283-.007,0-.744q-6.126-.168-12.23-.442,2.124.1,4.246.178l-.029.743.643.025.029-.743h0l.058,0q1.272.048,2.544.091,1.316.046,2.631.085ZM910,1675.451q25.6,3.046,51.551,4.163C944.333,1678.873,927.023,1677.475,910,1675.451Zm50.08,3.354.083,0ZM991.5,322.231a676.141,676.141,0,1,0,264.013,53.3A674.028,674.028,0,0,0,991.5,322.231ZM906.086,1674.973l.033.005.093-.738q1.683.21,3.371.412-1.76-.212-3.519-.431l.114.014Zm-.687-.086.645.081Zm-1.154-.146,1.106.14.094-.738.167.021-1.3-.164.025,0Zm-6.568-.872c2.176.3,4.347.588,6.527.867l-1.753-.227.1-.737-.107-.015.06.008-.1.738-.923-.121.1-.737-1.966-.262-.1.737-.351-.048.1-.736A680.246,680.246,0,0,1,365.848,1264.8q-9.981-23.6-18.109-47.73l-.7.238a677.623,677.623,0,0,1-35.288-215.284A679.41,679.41,0,0,0,897.31,1673.818l.1-.737.371.052ZM312.489,1002.021v0Zm-.745-.564c0,.185,0,.375,0,.559C311.745,1001.831,311.745,1001.643,311.744,1001.457Zm.744-.11v0Zm-.744-.118v0Zm.744-.132v0Zm-.744-.11v0Zm.743-.151v0Zm-.743-.093v0Zm.743-.243v0Zm1358.026,0h0Zm.74-2.167,0,2.167q0-6.612-.124-13.205l-.744.014,0-.155q.108,5.582.124,11.182ZM312.487,1000.5h0Zm28.46-197.815a677.619,677.619,0,0,0-29.2,197.815v-.269A677.579,677.579,0,0,1,340.947,802.685ZM1671.1,985.711l.029,1.459Q1671.116,986.441,1671.1,985.711Zm-.776-1.464c.011.5.022.985.032,1.482l0-.119.744-.016c-.023-1.082-.049-2.17-.077-3.253l.046,1.888Zm-.063-2.509c.006.229.012.453.018.681l0-.06.744-.02q-.039-1.515-.086-3.028l-.743.023q-.039-1.314-.085-2.631-.042-1.272-.091-2.544l0-.058h0l.743-.029c-.008-.217-.016-.426-.025-.643l-.743.029q-.082-2.121-.178-4.246.276,6.115.442,12.249l.743-.041-.372.011.372-.011-.372.011.373.008.007.283ZM1666.451,919c2.024,17.022,3.422,34.332,4.163,51.551Q1669.5,944.6,1666.451,919Zm3.354,50.08c0,.028,0,.055,0,.083C1669.808,969.136,1669.807,969.109,1669.805,969.081Zm-4.584-54.017q.22,1.758.431,3.519-.2-1.687-.412-3.371l.738-.093-.005-.033-.738.092Zm.666-.665.081.645C1665.941,914.83,1665.914,914.612,1665.887,914.4Zm-.887-1.085c.056.438.109.86.164,1.3l-.021-.167.738-.094c-.046-.367-.094-.739-.14-1.106l-.738.094Zm.509-1.863.227,1.753c-.279-2.18-.567-4.351-.867-6.527l-.736.1-.052-.371.737-.1A679.249,679.249,0,0,0,995.11,320.753a677.547,677.547,0,0,1,213.2,35.281l-.238.7q24.126,8.126,47.73,18.109a678.764,678.764,0,0,1,408.533,533.42l.736-.1.048.351-.737.1c.088.656.175,1.31.262,1.966l.737-.1.121.923-.738.1-.008-.06.015.107Zm-941.848-535.9A682.185,682.185,0,0,0,366.546,732.661c5.4-12.58,11.2-25.042,17.345-37.287q7.31-14.556,15.258-28.656l.648.365q-.375.664-.749,1.332c.263-.469.523-.932.787-1.4l-.648-.365.339-.6.647.367c.063-.112.129-.227.192-.338l-.649-.365.09-.159.649.364-.038.068a683.476,683.476,0,0,1,256.57-256.57l-.068.038-.364-.649.159-.09.365.649.338-.192-.367-.647.6-.339.365.648c.467-.264.93-.524,1.4-.787q-.667.374-1.332.749l-.365-.648q14.075-7.935,28.656-15.258C698.619,386.742,711.081,380.944,723.661,375.546Zm267.839-54.8a677.619,677.619,0,0,0-197.815,29.2,677.579,677.579,0,0,1,197.546-29.2Zm3.523.752h0Zm-.279,0h0Zm-3.244-.008c1.069,0,2.13,0,3.2.008-.978,0-1.952-.007-2.929-.008v-.743H991.5Zm3.441-.735h0Zm-.227,0ZM905.277,1674.872l.129-.733h0ZM1665.14,914.41l.731-.137v0Z"

                        transform="translate(-73 -85)"/>
                      <path
                        className="cls-33"
                        d="M991.5,1681a678.374,678.374,0,1,1,264.88-53.477A676.248,676.248,0,0,1,991.5,1681Zm-13.205-.868q6.593.124,13.205.124A679.192,679.192,0,0,0,1671.256,1000.5l0,2.172-.744,0q-.015,4.689-.092,9.364l.744.012a688.176,688.176,0,0,1-6.741,85.48q-.107.755-.216,1.506l-.736-.106,0,.011.737.106-.247,1.69-.736-.109a678.832,678.832,0,0,1-571.6,571.6l.109.736-1.69.247-.106-.737-.011,0,.106.736q-.751.11-1.506.216a688.176,688.176,0,0,1-85.48,6.741l-.012-.744q-4.68.078-9.364.092l0,.744c-1.444,0-2.893,0-4.337,0l0-.744q-5.6-.016-11.182-.124l.155,0Zm-1.584-.032,1.459.029Zm-3.37-.079c1.083.028,2.171.054,3.253.077l.016-.744.119,0-1.482-.032-.018.743Zm-3.03-.086q1.514.046,3.028.086l.02-.744.06,0-.681-.018-.016.743-.283-.007,0-.744q-6.126-.168-12.23-.442,2.124.1,4.246.178l-.029.743.643.025.029-.743h0l.058,0q1.272.048,2.544.091,1.316.046,2.631.085ZM910,1675.451q25.6,3.046,51.551,4.163C944.333,1678.873,927.023,1677.475,910,1675.451Zm50.08,3.354.083,0ZM991.5,322.231a676.141,676.141,0,1,0,264.013,53.3A674.028,674.028,0,0,0,991.5,322.231ZM906.086,1674.973l.033.005.093-.738q1.683.21,3.371.412-1.76-.212-3.519-.431l.114.014Zm-.687-.086.645.081Zm-1.154-.146,1.106.14.094-.738.167.021-1.3-.164.025,0Zm-6.568-.872c2.176.3,4.347.588,6.527.867l-1.753-.227.1-.737-.107-.015.06.008-.1.738-.923-.121.1-.737-1.966-.262-.1.737-.351-.048.1-.736A680.246,680.246,0,0,1,365.848,1264.8q-9.981-23.6-18.109-47.73l-.7.238a677.623,677.623,0,0,1-35.288-215.284A679.41,679.41,0,0,0,897.31,1673.818l.1-.737.371.052ZM312.489,1002.021v0Zm-.745-.564c0,.185,0,.375,0,.559C311.745,1001.831,311.745,1001.643,311.744,1001.457Zm.744-.11v0Zm-.744-.118v0Zm.744-.132v0Zm-.744-.11v0Zm.743-.151v0Zm-.743-.093v0Zm.743-.243v0Zm1358.026,0h0Zm.74-2.167,0,2.167q0-6.612-.124-13.205l-.744.014,0-.155q.108,5.582.124,11.182ZM312.487,1000.5h0Zm28.46-197.815a677.619,677.619,0,0,0-29.2,197.815v-.269A677.579,677.579,0,0,1,340.947,802.685ZM1671.1,985.711l.029,1.459Q1671.116,986.441,1671.1,985.711Zm-.776-1.464c.011.5.022.985.032,1.482l0-.119.744-.016c-.023-1.082-.049-2.17-.077-3.253l.046,1.888Zm-.063-2.509c.006.229.012.453.018.681l0-.06.744-.02q-.039-1.515-.086-3.028l-.743.023q-.039-1.314-.085-2.631-.042-1.272-.091-2.544l0-.058h0l.743-.029c-.008-.217-.016-.426-.025-.643l-.743.029q-.082-2.121-.178-4.246.276,6.115.442,12.249l.743-.041-.372.011.372-.011-.372.011.373.008.007.283ZM1666.451,919c2.024,17.022,3.422,34.332,4.163,51.551Q1669.5,944.6,1666.451,919Zm3.354,50.08c0,.028,0,.055,0,.083C1669.808,969.136,1669.807,969.109,1669.805,969.081Zm-4.584-54.017q.22,1.758.431,3.519-.2-1.687-.412-3.371l.738-.093-.005-.033-.738.092Zm.666-.665.081.645C1665.941,914.83,1665.914,914.612,1665.887,914.4Zm-.887-1.085c.056.438.109.86.164,1.3l-.021-.167.738-.094c-.046-.367-.094-.739-.14-1.106l-.738.094Zm.509-1.863.227,1.753c-.279-2.18-.567-4.351-.867-6.527l-.736.1-.052-.371.737-.1A679.249,679.249,0,0,0,995.11,320.753a677.547,677.547,0,0,1,213.2,35.281l-.238.7q24.126,8.126,47.73,18.109a678.764,678.764,0,0,1,408.533,533.42l.736-.1.048.351-.737.1c.088.656.175,1.31.262,1.966l.737-.1.121.923-.738.1-.008-.06.015.107Zm-941.848-535.9A682.185,682.185,0,0,0,366.546,732.661c5.4-12.58,11.2-25.042,17.345-37.287q7.31-14.556,15.258-28.656l.648.365q-.375.664-.749,1.332c.263-.469.523-.932.787-1.4l-.648-.365.339-.6.647.367c.063-.112.129-.227.192-.338l-.649-.365.09-.159.649.364-.038.068a683.476,683.476,0,0,1,256.57-256.57l-.068.038-.364-.649.159-.09.365.649.338-.192-.367-.647.6-.339.365.648c.467-.264.93-.524,1.4-.787q-.667.374-1.332.749l-.365-.648q14.075-7.935,28.656-15.258C698.619,386.742,711.081,380.944,723.661,375.546Zm267.839-54.8a677.619,677.619,0,0,0-197.815,29.2,677.579,677.579,0,0,1,197.546-29.2Zm3.523.752h0Zm-.279,0h0Zm-3.244-.008c1.069,0,2.13,0,3.2.008-.978,0-1.952-.007-2.929-.008v-.743H991.5Zm3.441-.735h0Zm-.227,0ZM905.277,1674.872l.129-.733h0ZM1665.14,914.41l.731-.137v0Z"

                        transform="translate(-73 -85)"/>
                    </g>
                    <line
                      className="cls-33"
                      x1="685"
                      y1="35"
                      x2="831"
                      y2="559"/>
                    <g>
                      <path
                        className="cls-31"
                        d="M999.5,1362a366.355,366.355,0,1,1,143.047-28.88A365.211,365.211,0,0,1,999.5,1362Zm-7.131-.469q3.559.068,7.131.067a366.791,366.791,0,0,0,367.1-367.1l0,1.173-.4,0q-.007,2.534-.05,5.057l.4.007a371.718,371.718,0,0,1-3.64,46.163l-.117.813-.4-.057,0,.006.4.057-.133.913-.4-.059a366.6,366.6,0,0,1-308.687,308.687l.059.4-.913.133-.057-.4-.006,0,.057.4-.813.117a371.718,371.718,0,0,1-46.163,3.64l-.007-.4q-2.526.042-5.057.05l0,.4c-.78,0-1.563,0-2.343,0v-.4q-3.021-.009-6.038-.067l.083,0Zm-.856-.017.788.016Zm-1.819-.043c.584.016,1.172.029,1.756.042l.009-.4h.064l-.8-.017-.01.4Zm-1.637-.046q.817.025,1.635.046l.011-.4h.033l-.368-.009-.009.4-.153,0,0-.4q-3.309-.091-6.605-.239,1.148.051,2.293.1l-.015.4.347.014.015-.4h.032q.687.027,1.373.05.711.024,1.421.046ZM955.487,1359q13.824,1.645,27.84,2.249C974.028,1360.852,964.679,1360.1,955.487,1359Zm27.046,1.812.044,0ZM999.5,628.205a365.146,365.146,0,1,0,142.579,28.785A364,364,0,0,0,999.5,628.205Zm-46.127,730.54.018,0,.05-.4q.909.114,1.82.223-.949-.114-1.9-.233l.061.008ZM953,1358.7l.348.044Zm-.624-.079.6.075.05-.4.091.011-.7-.088h.013Zm-3.546-.471c1.175.162,2.347.317,3.524.468l-.946-.122.052-.4-.058-.008.033,0-.052.4-.5-.066.053-.4-1.062-.142-.053.4-.189-.025.055-.4a367.364,367.364,0,0,1-288.07-220.626q-5.389-12.744-9.779-25.776l-.381.128A365.936,365.936,0,0,1,632.4,995.325a366.913,366.913,0,0,0,316.23,362.8l.053-.4.2.027ZM632.8,995.321h0Zm-.4-.3c0,.1,0,.2,0,.3C632.4,995.219,632.4,995.117,632.4,995.017Zm.4-.06v0Zm-.4-.063v0Zm.4-.072v0Zm-.4-.059v0Zm.4-.081v0Zm-.4-.051v0Zm.4-.131v0Zm733.394,0h0Zm.4-1.17,0,1.17q0-3.57-.067-7.131l-.4.007,0-.083q.058,3.014.067,6.039ZM632.8,994.5h0Zm15.369-106.829A365.977,365.977,0,0,0,632.4,994.5v-.145A365.971,365.971,0,0,1,648.172,887.671Zm718.342,98.842.016.788Q1366.523,986.908,1366.514,986.513Zm-.419-.79c.006.267.012.532.017.8v-.064l.4-.009c-.013-.584-.026-1.172-.042-1.756l.025,1.019Zm-.034-1.355.009.368V984.7l.4-.011q-.021-.817-.046-1.635l-.4.012q-.021-.709-.046-1.421-.023-.685-.05-1.373v-.032h0l.4-.015c0-.117-.009-.23-.014-.347l-.4.015q-.043-1.146-.1-2.293.149,3.3.239,6.615l.4-.022-.2.006.2-.006-.2.006.2,0,0,.153ZM1364,950.487c1.094,9.192,1.849,18.541,2.249,27.84Q1365.649,964.313,1364,950.487Zm1.812,27.046,0,.044Zm-2.476-29.172q.119.95.233,1.9-.109-.91-.223-1.82l.4-.05,0-.018-.4.049Zm.36-.359.044.348Zm-.479-.586c.03.236.059.464.088.7l-.011-.091.4-.05-.075-.6-.4.051Zm.275-1.006.122.946c-.151-1.177-.306-2.349-.468-3.524l-.4.055-.027-.2.4-.053a366.825,366.825,0,0,0-361.673-316.226,365.881,365.881,0,0,1,115.138,19.053l-.128.381q13.029,4.387,25.776,9.779a366.559,366.559,0,0,1,220.626,288.07l.4-.055.025.189-.4.053c.048.355.1.708.142,1.062l.4-.053.066.5-.4.052,0-.033.008.058ZM854.855,657A368.417,368.417,0,0,0,662,849.855c2.915-6.794,6.047-13.523,9.367-20.136q3.948-7.862,8.24-15.476l.35.2c-.135.24-.27.479-.4.719.142-.253.282-.5.425-.755l-.35-.2.183-.324.349.2.1-.182-.35-.2.048-.086.35.2-.02.036A369.116,369.116,0,0,1,818.848,675.289l-.036.02-.2-.35.086-.048.2.35.182-.1-.2-.349.324-.183.2.35c.252-.143.5-.283.755-.425l-.719.4-.2-.35q7.6-4.286,15.476-8.24C841.332,663.044,848.061,659.912,854.855,657ZM999.5,627.4a365.977,365.977,0,0,0-106.829,15.77A365.971,365.971,0,0,1,999.355,627.4Zm1.9.406h0Zm-.151,0h0Zm-1.752,0c.577,0,1.15,0,1.727,0-.528,0-1.054,0-1.582,0v-.4H999.5Zm1.858-.4h0Zm-.122,0Zm-48.3,731.284.069-.395h0ZM1363.3,948.008l.395-.074v0Z"

                        transform="translate(-73 -85)"/>
                      <path
                        className="cls-32"
                        d="M999.5,1362a366.355,366.355,0,1,1,143.047-28.88A365.211,365.211,0,0,1,999.5,1362Zm-7.131-.469q3.559.068,7.131.067a366.791,366.791,0,0,0,367.1-367.1l0,1.173-.4,0q-.007,2.534-.05,5.057l.4.007a371.718,371.718,0,0,1-3.64,46.163l-.117.813-.4-.057,0,.006.4.057-.133.913-.4-.059a366.6,366.6,0,0,1-308.687,308.687l.059.4-.913.133-.057-.4-.006,0,.057.4-.813.117a371.718,371.718,0,0,1-46.163,3.64l-.007-.4q-2.526.042-5.057.05l0,.4c-.78,0-1.563,0-2.343,0v-.4q-3.021-.009-6.038-.067l.083,0Zm-.856-.017.788.016Zm-1.819-.043c.584.016,1.172.029,1.756.042l.009-.4h.064l-.8-.017-.01.4Zm-1.637-.046q.817.025,1.635.046l.011-.4h.033l-.368-.009-.009.4-.153,0,0-.4q-3.309-.091-6.605-.239,1.148.051,2.293.1l-.015.4.347.014.015-.4h.032q.687.027,1.373.05.711.024,1.421.046ZM955.487,1359q13.824,1.645,27.84,2.249C974.028,1360.852,964.679,1360.1,955.487,1359Zm27.046,1.812.044,0ZM999.5,628.205a365.146,365.146,0,1,0,142.579,28.785A364,364,0,0,0,999.5,628.205Zm-46.127,730.54.018,0,.05-.4q.909.114,1.82.223-.949-.114-1.9-.233l.061.008ZM953,1358.7l.348.044Zm-.624-.079.6.075.05-.4.091.011-.7-.088h.013Zm-3.546-.471c1.175.162,2.347.317,3.524.468l-.946-.122.052-.4-.058-.008.033,0-.052.4-.5-.066.053-.4-1.062-.142-.053.4-.189-.025.055-.4a367.364,367.364,0,0,1-288.07-220.626q-5.389-12.744-9.779-25.776l-.381.128A365.936,365.936,0,0,1,632.4,995.325a366.913,366.913,0,0,0,316.23,362.8l.053-.4.2.027ZM632.8,995.321h0Zm-.4-.3c0,.1,0,.2,0,.3C632.4,995.219,632.4,995.117,632.4,995.017Zm.4-.06v0Zm-.4-.063v0Zm.4-.072v0Zm-.4-.059v0Zm.4-.081v0Zm-.4-.051v0Zm.4-.131v0Zm733.394,0h0Zm.4-1.17,0,1.17q0-3.57-.067-7.131l-.4.007,0-.083q.058,3.014.067,6.039ZM632.8,994.5h0Zm15.369-106.829A365.977,365.977,0,0,0,632.4,994.5v-.145A365.971,365.971,0,0,1,648.172,887.671Zm718.342,98.842.016.788Q1366.523,986.908,1366.514,986.513Zm-.419-.79c.006.267.012.532.017.8v-.064l.4-.009c-.013-.584-.026-1.172-.042-1.756l.025,1.019Zm-.034-1.355.009.368V984.7l.4-.011q-.021-.817-.046-1.635l-.4.012q-.021-.709-.046-1.421-.023-.685-.05-1.373v-.032h0l.4-.015c0-.117-.009-.23-.014-.347l-.4.015q-.043-1.146-.1-2.293.149,3.3.239,6.615l.4-.022-.2.006.2-.006-.2.006.2,0,0,.153ZM1364,950.487c1.094,9.192,1.849,18.541,2.249,27.84Q1365.649,964.313,1364,950.487Zm1.812,27.046,0,.044Zm-2.476-29.172q.119.95.233,1.9-.109-.91-.223-1.82l.4-.05,0-.018-.4.049Zm.36-.359.044.348Zm-.479-.586c.03.236.059.464.088.7l-.011-.091.4-.05-.075-.6-.4.051Zm.275-1.006.122.946c-.151-1.177-.306-2.349-.468-3.524l-.4.055-.027-.2.4-.053a366.825,366.825,0,0,0-361.673-316.226,365.881,365.881,0,0,1,115.138,19.053l-.128.381q13.029,4.387,25.776,9.779a366.559,366.559,0,0,1,220.626,288.07l.4-.055.025.189-.4.053c.048.355.1.708.142,1.062l.4-.053.066.5-.4.052,0-.033.008.058ZM854.855,657A368.417,368.417,0,0,0,662,849.855c2.915-6.794,6.047-13.523,9.367-20.136q3.948-7.862,8.24-15.476l.35.2c-.135.24-.27.479-.4.719.142-.253.282-.5.425-.755l-.35-.2.183-.324.349.2.1-.182-.35-.2.048-.086.35.2-.02.036A369.116,369.116,0,0,1,818.848,675.289l-.036.02-.2-.35.086-.048.2.35.182-.1-.2-.349.324-.183.2.35c.252-.143.5-.283.755-.425l-.719.4-.2-.35q7.6-4.286,15.476-8.24C841.332,663.044,848.061,659.912,854.855,657ZM999.5,627.4a365.977,365.977,0,0,0-106.829,15.77A365.971,365.971,0,0,1,999.355,627.4Zm1.9.406h0Zm-.151,0h0Zm-1.752,0c.577,0,1.15,0,1.727,0-.528,0-1.054,0-1.582,0v-.4H999.5Zm1.858-.4h0Zm-.122,0Zm-48.3,731.284.069-.395h0ZM1363.3,948.008l.395-.074v0Z"

                        transform="translate(-73 -85)"/>
                      <path
                        className="cls-33"
                        d="M999.5,1362a366.355,366.355,0,1,1,143.047-28.88A365.211,365.211,0,0,1,999.5,1362Zm-7.131-.469q3.559.068,7.131.067a366.791,366.791,0,0,0,367.1-367.1l0,1.173-.4,0q-.007,2.534-.05,5.057l.4.007a371.718,371.718,0,0,1-3.64,46.163l-.117.813-.4-.057,0,.006.4.057-.133.913-.4-.059a366.6,366.6,0,0,1-308.687,308.687l.059.4-.913.133-.057-.4-.006,0,.057.4-.813.117a371.718,371.718,0,0,1-46.163,3.64l-.007-.4q-2.526.042-5.057.05l0,.4c-.78,0-1.563,0-2.343,0v-.4q-3.021-.009-6.038-.067l.083,0Zm-.856-.017.788.016Zm-1.819-.043c.584.016,1.172.029,1.756.042l.009-.4h.064l-.8-.017-.01.4Zm-1.637-.046q.817.025,1.635.046l.011-.4h.033l-.368-.009-.009.4-.153,0,0-.4q-3.309-.091-6.605-.239,1.148.051,2.293.1l-.015.4.347.014.015-.4h.032q.687.027,1.373.05.711.024,1.421.046ZM955.487,1359q13.824,1.645,27.84,2.249C974.028,1360.852,964.679,1360.1,955.487,1359Zm27.046,1.812.044,0ZM999.5,628.205a365.146,365.146,0,1,0,142.579,28.785A364,364,0,0,0,999.5,628.205Zm-46.127,730.54.018,0,.05-.4q.909.114,1.82.223-.949-.114-1.9-.233l.061.008ZM953,1358.7l.348.044Zm-.624-.079.6.075.05-.4.091.011-.7-.088h.013Zm-3.546-.471c1.175.162,2.347.317,3.524.468l-.946-.122.052-.4-.058-.008.033,0-.052.4-.5-.066.053-.4-1.062-.142-.053.4-.189-.025.055-.4a367.364,367.364,0,0,1-288.07-220.626q-5.389-12.744-9.779-25.776l-.381.128A365.936,365.936,0,0,1,632.4,995.325a366.913,366.913,0,0,0,316.23,362.8l.053-.4.2.027ZM632.8,995.321h0Zm-.4-.3c0,.1,0,.2,0,.3C632.4,995.219,632.4,995.117,632.4,995.017Zm.4-.06v0Zm-.4-.063v0Zm.4-.072v0Zm-.4-.059v0Zm.4-.081v0Zm-.4-.051v0Zm.4-.131v0Zm733.394,0h0Zm.4-1.17,0,1.17q0-3.57-.067-7.131l-.4.007,0-.083q.058,3.014.067,6.039ZM632.8,994.5h0Zm15.369-106.829A365.977,365.977,0,0,0,632.4,994.5v-.145A365.971,365.971,0,0,1,648.172,887.671Zm718.342,98.842.016.788Q1366.523,986.908,1366.514,986.513Zm-.419-.79c.006.267.012.532.017.8v-.064l.4-.009c-.013-.584-.026-1.172-.042-1.756l.025,1.019Zm-.034-1.355.009.368V984.7l.4-.011q-.021-.817-.046-1.635l-.4.012q-.021-.709-.046-1.421-.023-.685-.05-1.373v-.032h0l.4-.015c0-.117-.009-.23-.014-.347l-.4.015q-.043-1.146-.1-2.293.149,3.3.239,6.615l.4-.022-.2.006.2-.006-.2.006.2,0,0,.153ZM1364,950.487c1.094,9.192,1.849,18.541,2.249,27.84Q1365.649,964.313,1364,950.487Zm1.812,27.046,0,.044Zm-2.476-29.172q.119.95.233,1.9-.109-.91-.223-1.82l.4-.05,0-.018-.4.049Zm.36-.359.044.348Zm-.479-.586c.03.236.059.464.088.7l-.011-.091.4-.05-.075-.6-.4.051Zm.275-1.006.122.946c-.151-1.177-.306-2.349-.468-3.524l-.4.055-.027-.2.4-.053a366.825,366.825,0,0,0-361.673-316.226,365.881,365.881,0,0,1,115.138,19.053l-.128.381q13.029,4.387,25.776,9.779a366.559,366.559,0,0,1,220.626,288.07l.4-.055.025.189-.4.053c.048.355.1.708.142,1.062l.4-.053.066.5-.4.052,0-.033.008.058ZM854.855,657A368.417,368.417,0,0,0,662,849.855c2.915-6.794,6.047-13.523,9.367-20.136q3.948-7.862,8.24-15.476l.35.2c-.135.24-.27.479-.4.719.142-.253.282-.5.425-.755l-.35-.2.183-.324.349.2.1-.182-.35-.2.048-.086.35.2-.02.036A369.116,369.116,0,0,1,818.848,675.289l-.036.02-.2-.35.086-.048.2.35.182-.1-.2-.349.324-.183.2.35c.252-.143.5-.283.755-.425l-.719.4-.2-.35q7.6-4.286,15.476-8.24C841.332,663.044,848.061,659.912,854.855,657ZM999.5,627.4a365.977,365.977,0,0,0-106.829,15.77A365.971,365.971,0,0,1,999.355,627.4Zm1.9.406h0Zm-.151,0h0Zm-1.752,0c.577,0,1.15,0,1.727,0-.528,0-1.054,0-1.582,0v-.4H999.5Zm1.858-.4h0Zm-.122,0Zm-48.3,731.284.069-.395h0ZM1363.3,948.008l.395-.074v0Z"

                        transform="translate(-73 -85)"/>
                    </g>
                    <line
                      className="cls-33"
                      x1="273"
                      y1="273"
                      x2="667"
                      y2="650"/>
                    <line
                      className="cls-33"
                      x1="1163"
                      y1="40"
                      x2="1019"
                      y2="554"/>
                    <line
                      className="cls-33"
                      x1="1565"
                      y1="273"
                      x2="1186"
                      y2="650"/>
                    <line
                      className="cls-33"
                      x1="1804"
                      y1="685"
                      x2="1283"
                      y2="819"/>
                    <line
                      className="cls-33"
                      x1="1801"
                      y1="1154"
                      x2="1279"
                      y2="1013"/>
                    <line
                      className="cls-33"
                      x1="1186"
                      y1="1169"
                      x2="1564"
                      y2="1564"/>
                    <line
                      className="cls-33"
                      x1="1023"
                      y1="1263"
                      x2="1164"
                      y2="1798"/>
                    <line
                      className="cls-33"
                      x1="833"
                      y1="1265"
                      x2="685"
                      y2="1801"/>
                    <line
                      className="cls-33"
                      x1="667"
                      y1="1169"
                      x2="273"
                      y2="1565"/>
                    <line
                      className="cls-33"
                      x1="36"
                      y1="1148"
                      x2="569"
                      y2="1001"/>
                    <line
                      className="cls-33"
                      x1="37"
                      y1="677"
                      x2="567"
                      y2="818"/>
                  </g>
                </svg>
              </Paper>
            </Grid>
          </Grid>

          <Grid>
            <Paper className={classes.control}>
              <Grid container spacing={8} justify="center">
                <Grid>
                  <RadioGroup
                    name="mode"
                    aria-label="Key Mode"
                    value={mode}
                    onChange={this.handleChange("mode")}
                    row
                  >
                    <FormControlLabel value={KeyState.MAIN} control={<Radio/>} label="Main"/>
                    <FormControlLabel value={KeyState.SEMITONE} control={<Radio/>} label="Semi-tone"/>
                    <FormControlLabel value={KeyState.DOUBLE_SEMITONE} control={<Radio/>} label="Double Semi-tone"/>
                    <FormControlLabel value={KeyState.DIAGONAL} control={<Radio/>} label="Diagonal"/>
                    <FormControlLabel value={KeyState.ALL} control={<Radio/>} label="All"/>
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


CamelotWheel.propTypes = {
  mode : PropTypes.string
};

export default withStyles(styles)(CamelotWheel);
