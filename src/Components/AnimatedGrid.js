import React from "react";
import "./AnimatedGrid.css";

function AnimatedGrid() {

    const [colourArray, setCellColours] = React.useState([]);

    React.useEffect(() => {
      const interval = setInterval(() => {

        const colours = []
        colours.push(getRandomColour());
        colours.push(getRandomColour());
        colours.push(getRandomColour());
        colours.push(getRandomColour());
        colours.push(getRandomColour());

        setCellColours(colours);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const getRandomColour = () => Math.round(Math.random()) ? "#DEB703" : "#04585E";

    return (
        <>
            <table id="grid">
                <tbody>
                    <tr>
                        <td class="photo"></td>
                        <td class="color-block" style={{ backgroundColor: colourArray[0] }}></td>
                        <td class="photo"></td>
                        <td class="color-block" style={{ backgroundColor: colourArray[1] }}></td>
                        <td class="photo"></td>
                    </tr>
                    <tr>
                        <td class="color-block" style={{ backgroundColor: colourArray[2] }}></td>
                        <td class="photo"></td>
                        <td class="color-block" style={{ backgroundColor: colourArray[3] }}></td>
                        <td class="photo"></td>
                        <td class="color-block" style={{ backgroundColor: colourArray[4] }}></td>
                    </tr>
                </tbody>                
            </table>
        </>
    );
}

export default AnimatedGrid;