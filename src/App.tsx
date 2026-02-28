import React from "react";
import Button from "./components/Button";
import Label from "./components/Label";
import Text from "./components/Text";
import Table from "./components/Table";
import Dropdown from "./components/Dropdown";
import RadioButton from "./components/RadioButton";
import Img from "./components/Img";
import HeroImage from "./components/HeroImage";
import Card from "./components/Card";
import TableHeader from "./components/Table/TableHeader/TableHeader";
import TableCell from "./components/Table/TableCell/TableCell";
import TableFooter from "./components/Table/TableFooter/TableFooter";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>UI Garden Component Library</h1>

      <hr />

      <h2>Button</h2>
      <Button label="Primary Button" />
      <Button label="Disabled Button" disabled />

      <h2>Label</h2>
      <Label text="Default Label" />
      <Label text="Disabled Label" disabled />

      <h2>Text</h2>
      <Text content="This is a sample text component." />
      <Text disabled content="Disabled text example." />

      <h2>Dropdown</h2>
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
      />
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        disabled
      />

      <h2>Radio Button</h2>
      <RadioButton label="Option A" />
      <RadioButton label="Disabled Option" disabled />

      <h2>Image</h2>
      <Img
        src="https://via.placeholder.com/150"
        alt="Example"
      />

      <h2>Hero Image</h2>
      <HeroImage
        src="https://via.placeholder.com/800x300"
        alt="Hero"
      />

      <h2>Card - Default</h2>
      <Card backgroundColor="#ffffff" disabled={false}>
      <h3>Sample Card</h3>
      <p>This is a simple card component.</p>
      </Card>

      <h2>Card - Disabled</h2>
      <Card backgroundColor="#ffffff" disabled={true}>
      <h3>Sample Card</h3>
      <p>This is a disabled card example.</p>
      </Card>

      <h2>Table - Default</h2>
      <Table backgroundColor="#ffffff" disabled={false}>
        <thead>
          <tr>
            <TableHeader label="Name" />
            <TableHeader label="Age" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell value="Alice" />
            <TableCell value="22" />
          </tr>
          <tr>
            <TableCell value="Bob" />
            <TableCell value="30" />
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <TableFooter label="End" colSpan={2} />
          </tr>
        </tfoot>
      </Table>

      <h2>Table - Disabled</h2>
      <Table backgroundColor="#ffffff" disabled={true}>
        <thead>
          <tr>
            <TableHeader label="Name" disabled />
            <TableHeader label="Age" disabled />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell value="Alice" disabled />
            <TableCell value="22" disabled />
          </tr>
          <tr>
            <TableCell value="Bob" disabled />
            <TableCell value="30" disabled />
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <TableFooter label="End" colSpan={2} disabled />
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default App;