import "./App.css";
import { RadialGrid, RadialRow, RadialCenter } from "radial-grid";

import { CopyBlock, tomorrowNightEighties as theme } from "react-code-blocks";

function App() {
  return (
    <div className="text-left flex flex-col gap-2">
      <h1 className="font-bold mb-4">Radial Grid</h1>
      <p>
        A library to organize elements into circles instead of boring normal
        grids.
      </p>
      <h2>Installation</h2>
      <code>npm install radial-grid</code>
      <h2>Usage</h2>
      <h3>Basic</h3>
      <p>
        This will produce 6 evenly-spaced tick marks, all tilted toward the
        center.
      </p>
      <Code>{`import { RadialGrid, RadialRow } from "radial-grid";

<RadialGrid className="w-52">
	<RadialRow className="bg-red-800 rounded-full">
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
	</RadialRow>
</RadialGrid>`}</Code>
      <RadialGrid className="w-52">
        <RadialRow className="bg-red-800 rounded-full my-6">
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
        </RadialRow>
      </RadialGrid>
      <h3>Preserve Child Rotation</h3>
      <p>
        Should you want the children you pass to remain in the orientation you
        provide, you may use the <code>preserveChildRotation</code> prop. For
        example, to make a clock-like layout:
      </p>
      <Code>{`<RadialGrid className="w-52">
	<RadialRow
		className="bg-red-800 rounded-full"
		preserveChildRotation>
  		<p>12</p>
		<p>1</p>
		<p>2</p>
		<p>3</p>
		<p>4</p>
		<p>5</p>
		<p>6</p>
		<p>7</p>
		<p>8</p>
		<p>9</p>
		<p>10</p>
		<p>11</p>
	</RadialRow>
</RadialGrid>`}</Code>
      <RadialGrid className="w-52">
        <RadialRow
          className="bg-red-800 rounded-full my-6"
          preserveChildRotation>
          <p>12</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </RadialRow>
      </RadialGrid>
      <h3>Start and End angles</h3>
      <p>
        If you want a more elaborate layout than a simple circle, consider using
        the <code>startAngle</code> and <code>endAngle</code> props. These take
        any number (in degrees) to modify the start and end position of the
        elements. <br />
        <strong>Note:</strong> The way angles are calculated, using custom start
        and end angles often produces an undesired effect of the last element
        not reaching the given end angle. To fix this, use the{" "}
        <code>lastMeetEnd</code>
        prop to have the first child element sitting on the given start angle,
        the last child element sitting on the given end angle, and the rest of
        the elements evenly spaced throughout.
      </p>
      <Code>
        {`<RadialGrid className="w-52">
	<RadialRow
		className="bg-red-800 rounded-full"
		startAngle={90}
		endAngle={270}
		lastMeetEnd>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
	</RadialRow>
</RadialGrid>`}
      </Code>
      <RadialGrid className="w-52">
        <RadialRow
          className="bg-red-800 rounded-full my-6"
          startAngle={90}
          endAngle={270}
          lastMeetEnd>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
        </RadialRow>
      </RadialGrid>
      <h3>Multiple Rows</h3>
      <p>
        One grid can have unlimited rows. Simply add more, and be sure to
        specify the <code>diameter</code> prop on each with a valid CSS width
        value. This diameter represents the outer diameter of the row.
      </p>
      <Code>
        {`<RadialGrid className="w-52">
	<RadialRow
		diameter={"15rem"}
		className="bg-red-800 rounded-full"
		startAngle={90}
		endAngle={270}
		lastMeetEnd>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
	</RadialRow>
	<RadialRow
		diameter={"10rem"}
		className="bg-blue-800 rounded-full my-6"
		startAngle={270}
		endAngle={450}
		lastMeetEnd>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
	</RadialRow>
	<RadialRow
		diameter={"5rem"}
		className="bg-green-800 rounded-full">
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
	</RadialRow>
</RadialGrid>`}
      </Code>
      <RadialGrid className="w-52">
        <RadialRow
          diameter={"15rem"}
          className="bg-red-800 rounded-full my-6"
          startAngle={90}
          endAngle={270}
          lastMeetEnd>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
        </RadialRow>
        <RadialRow
          diameter={"10rem"}
          className="bg-blue-800 rounded-full my-6"
          startAngle={270}
          endAngle={450}
          lastMeetEnd>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
        </RadialRow>
        <RadialRow diameter={"5rem"} className="bg-green-800 rounded-full my-6">
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
        </RadialRow>
      </RadialGrid>
      <h3>Adding a Center</h3>
      <p>You can add an element in the middle of your circle like so:</p>
      <Code>{`<RadialGrid className="w-52">
	<RadialRow className="bg-red-800 rounded-full">
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
		<p>|</p>
	</RadialRow>
	<RadialCenter>
		<p>😀</p>
	</RadialCenter>
</RadialGrid>`}</Code>
      <RadialGrid className="w-52 my-6">
        <RadialRow className="bg-red-800 rounded-full" lastMeetEnd>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
          <p>|</p>
        </RadialRow>
        <RadialCenter>
          <p>😀</p>
        </RadialCenter>
      </RadialGrid>
    </div>
  );
}

export default App;

const Code: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CopyBlock
    text={children?.toString() ?? ""}
    language="jsx"
    theme={theme}
    codeBlock
  />
);
