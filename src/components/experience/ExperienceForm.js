/* eslint-disable react/prop-types */
import React from "react";
import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

function ExperienceForm(props) {
    const {
        companyName,
        positionTitle,
        location,
        description,
        startDate,
        endDate,
        id,
    } = props.form;

    const { onChange, cancel, save, remove } = props;

    return (
        <form
            className="experience-form section-form"
            id={id}
            data-array-name="experience"
            onSubmit={(e) => e.preventDefault()}
        >
            <InputGroup
                type="text"
                id="company-name"
                labelText="Company Name"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={onChange}
                data-key="companyName"
            />

            <InputGroup
                type="text"
                id="position-title"
                labelText="Position Title"
                placeholder="Enter Position title"
                value={positionTitle}
                onChange={onChange}
                data-key="positionTitle"
            />

            <div className="dates-group">
                <InputGroup
                    type="text"
                    id="startDate"
                    labelText="Start Date"
                    placeholder="Enter Start Date"
                    value={startDate}
                    onChange={onChange}
                    data-key="startDate"
                />

                <InputGroup
                    type="text"
                    id="endDate"
                    labelText="End Date"
                    placeholder="Enter End Date"
                    value={endDate}
                    onChange={onChange}
                    data-key="endDate"
                />
            </div>

            <InputGroup
                type="text"
                id="location"
                labelText="Location"
                placeholder="Enter Location"
                value={location}
                onChange={onChange}
                data-key="location"
            />

            <InputGroup
                type="text"
                id="description"
                labelText="Description"
                placeholder="Enter Description"
                value={description}
                onChange={onChange}
                data-key="description"
            />

            <Buttons save={save} cancel={cancel} remove={remove} />
        </form>
    );
}

export default ExperienceForm;
