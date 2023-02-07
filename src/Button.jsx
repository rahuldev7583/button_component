function Button({ classname, disabled, para = "Default" }) {
  return (
    <div>
      <button className={classname} disabled={disabled}>
        {para}
      </button>
    </div>
  );
}
function Para(props) {
  return <p className="para">{props.para}</p>;
}
function Buttons() {
  return (
    <div>
      <Para para="<Button />" />
      <Button />
      <Para para='<Button className="outline" />' />
      <Button classname="outline" />
      <Para para='<Button className="text" />' />
      <Button classname="text" />
      <Para para='<Button className="disableShadow" />' />
      <Button classname="disableShadow" />
      <div className="flex">
        <Para para='<Button className="disabled" />' />
        <Para para='<Button className="textDisabled" />' />
      </div>
      <div className="flex">
        <Button classname="disabled" disabled="true" />

        <Button classname="textDisabled" disabled="true" />
      </div>
      <div className="flex">
        <Para para='<Button className="start local_grocory_store" />' />
        <Para para='<Button className="end local_grocory_store" />' />
      </div>
      <div className="flex">
        <Button
          classname="local_grocory_store"
          para={
            <div>
              <span className="icon material-icons material-icons-outlined">
                local_grocery_store
              </span>
              <span >Default</span>
            </div>
          }
        />
        <Button
          classname="local_grocory_store"
          para={
            <div>
              <span>Default</span>
              <span className="icon material-icons material-icons-outlined">
                local_grocery_store
              </span>
            </div>
          }
        />
      </div>
      <div className="flex">
        <Para para='<Button className="sm" />' />

        <Para para='<Button className="md" />' />

        <Para para='<Button className="lg" />' />
      </div>
      <div className="flex">
        <Button classname="sm" />
        <Button classname="md" />
        <Button classname="lg" />
      </div>
      <div className="flex">
        <Para para='<Button className="default" />' />
        <Para para='<Button className="primary" />' />
        <Para para='<Button className="secondary" />' />
        <Para para='<Button className="danger" />' />
      </div>
      <div className="flex">
        <Button classname="default" />
        <Button classname="primary" />
        <Button classname="secondary" />
        <Button classname="danger" />
      </div>
    </div>
  );
}
export default Buttons;
