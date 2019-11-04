import React from 'react'

const UpperForm = () => {
  return (
    <div className="formInnerUpperContainer">
      <form>
        <label>
          <input type="text"
            name="name"
            placeholder="Your Name"
            className="formInputName"
          />
        </label>
        <br />
        <label>
          <input type="text"
            name="tel"
            placeholder="Phone"
            className="formInputTel"
          />
        </label>
        <br />
        <label>
          <input type="text"
            name="email"
            placeholder="Email"
            className="formInputEmail"
          />
        </label>
        <br />
        <label>
          <input type="text"
            name="interested-in"
            placeholder='I am interested in 1225 E. Moreland St.'
            className="formInputInterest"
          />
        </label>
        <br />
        <input type="submit"
          value="Contact Agent"
          className="formContactButton" />
        <br />
        <label className="formLabelCheckbox">
          <input name="finance-info"
            type="checkbox"
          />
          I want financing information.
          </label>
      </form>
      <div className="formContainerP">
        <p>By pressing Contact Agent, you agree that Zallo Group and real estate professionals
          may call/text you about your inquiry, which may involve use of automated means and
          prerecorded/artificial voices. You don't need to consent as a condition of buying any
            property, goods or services. Message/data rates may apply. You also agree to our <br />
          <span className="formTerms">
            Terms of Use.
            </span>
          Zallo does not endorse any real estate professionals.
          </p>
      </div>
    </div>
  )
}

export default UpperForm