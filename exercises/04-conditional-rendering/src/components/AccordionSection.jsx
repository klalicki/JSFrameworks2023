const AccordionSection = ({
  isOpen = true,
  title = "Title",
  content = "Sample Content",
}) => {
  return (
    <>
      <div className={`title ${isOpen ? "active" : null}`}>
        <i className="dropdown icon"></i>
        {title}
      </div>
      <div className={`content  ${isOpen ? "active" : null}`}>
        <p className={`transition ${isOpen ? "visible" : "hidden"}`}>
          {content}
        </p>
      </div>
    </>
  );
};
export default AccordionSection;
