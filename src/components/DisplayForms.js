import React from "react";
import CollapsedForm from "./CollapsedForm";

function DisplayForms({
    onChange,
    onHide,
    onRemove,
    titleKey,
    arrayName,
    onCancel,
    forms,
    FormComponent, // Make sure this is correctly passed
    toggleCollapsed, // If you're using toggleCollapsed, ensure it's defined and passed as a prop
}) {
    return (
        <div className="forms-container">
            {forms.map((form) =>
                form.isCollapsed ? (
                    <CollapsedForm
                        onClick={toggleCollapsed} // If using toggleCollapsed, make sure it's defined and passed
                        form={form}
                        key={form.id}
                        title={form[titleKey]}
                        arrayName={arrayName}
                        hideForm={onHide}
                    />
                ) : (
                    <FormComponent // Use formComponent here
                        onChange={onChange}
                        form={form}
                        key={form.id}
                        cancel={onCancel}
                        save={toggleCollapsed} // If using toggleCollapsed, make sure it's defined and passed
                        remove={onRemove}
                    />
                )
            )}
        </div>
    );
}

export default DisplayForms;
