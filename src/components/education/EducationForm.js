import InputGroup from "../InputGroup"
import Buttons from "../Buttons"

function EducationForm(props) {
    const { degree, schoolName, location, startDate, endDate, id } = props.form;
    const { onChange, cancel, save, remove } = props;

    return (
        <form
            className="education-form section-form"
            id={id}
            data-array-name="educations"
            onSubmit={(e) => e.preventDefault()}
        >
            <InputGroup
                type="schoolName"
                id="school-name"
                labelText="school Name"
                placeHolder="Enter SchoolName"
                value={schoolName}
                onChange={onChange}
                data-key="schoolName"


            />

            <InputGroup
                type="text"
                id="degree"
                labelText="degree"
                placeHolder="Enter degree"
                value={degree}
                onChange={onChange}
                data-key="degree"

            />

            <div className="dates-group">

                <InputGroup
                    type="text"
                    id="date"
                    labelText="start-date"
                    placeHolder="Enter Start"
                    value={startDate}
                    onChange={onChange}
                    data-key="startDate"

                />
                <InputGroup
                    type="text"
                    id="date"
                    labelText="end-date"
                    placeHolder="Enter End Date"
                    value={endDate}
                    onChange={onChange}
                    data-key="endDate"
                />
            </div>
            <InputGroup
                type="text"
                id="location"
                labelText="location"
                placeHolder="Enter location"
                value={location}
                onChange={onChange}
                data-key="location"
                optional
            />
            <Buttons save={save} cancel={cancel} remove={remove} />
        </form>
    )

}

export default EducationForm;