import '../sass/uikit.scss';

import React, {Component} from 'react';

export default class Uikit extends Component {
  render() {
	return (
		<div className="uikit usa-grid">
			<h2>H2 Header: UI Kit</h2>
			<img src="/static-assets/fpo.jpg" />
			<p><b>This is the paragraph style.</b> Icing donut cupcake. Gingerbread biscuit jelly gummi bears. Lemon drops tootsie roll lemon drops chocolate marshmallow candy canes. Tiramisu chocolate pudding jelly. Tootsie roll jelly-o tootsie roll soufflé muffin tootsie roll sweet sugar plum. Candy caramels tart chocolate cake icing. Donut chocolate cake donut wafer marzipan sweet cotton candy toffee. Croissant oat cake ice cream. Cheesecake jelly-o pie topping cake donut muffin. Oat cake topping gingerbread cheesecake jelly-o lemon drops. Jelly-o sweet roll wafer biscuit donut toffee topping candy. Tootsie roll cotton candy cake liquorice lollipop topping jelly-o gummies.</p>
			<div className="usa-width-one-whole add-hmargin">
				<h3>H3 Header: Buttons</h3>
				<button>Primary Button - Default</button>
				<button className="usa-button-secondary">Secondary Button - Default</button>
				<button className="usa-button-focus">Focus Button - Default</button>
				<button className="usa-button-disabled" disabled="">Disabled Button - Default</button>
				<button className="usa-button-big" type="button">"Big Button" - Default</button>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h3>H3 Header: Labels</h3>
					<h6>H6 Header: Small</h6>
					<span className="usa-label">New</span>
					<h6>H6 Header: Large</h6>
					<span className="usa-label-big">New</span>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h3>Alerts</h3>
				<div className="usa-alert usa-alert-success">
					<div className="usa-alert-body">
						<h3 className="usa-alert-heading">Success Status</h3>
						<p className="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
				</div>

				<div className="usa-alert usa-alert-warning">
					<div className="usa-alert-body">
						<h3 className="usa-alert-heading">Warning Status</h3>
						<p className="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
				</div>

				<div className="usa-alert usa-alert-error" role="alert">
					<div className="usa-alert-body">
						<h3 className="usa-alert-heading">Error Status</h3>
						<p className="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
				</div>

				<div className="usa-alert usa-alert-info">
					<div className="usa-alert-body">
						<h3 className="usa-alert-heading">Information Status</h3>
						<p className="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
				</div>

				<div className="usa-alert usa-alert-info">
					<div className="usa-alert-body">
						<h3 className="usa-alert-heading">Information Status</h3>
						<p className="usa-alert-text">Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui atione voluptatem sequi nesciunt. Neque porro quisquam est, qui doloremipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
					</div>
				</div>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h3>Accordions</h3>
				<div className="usa-accordion-bordered">
					<ul className="usa-unstyled-list">
						<li>
							<button className="usa-button-unstyled" aria-expanded="true" aria-controls="amendment-b-1">
							First Amendment
							</button>
							<div id="amendment-b-1" className="usa-accordion-content">
								<p>
								Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
								</p>
							</div>
						</li>
						<li>
							<button className="usa-button-unstyled" aria-controls="amendment-b-2">
							Second Amendment
							</button>
							<div id="amendment-b-2" className="usa-accordion-content">
								<p>
								A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h3>Form Elements</h3>
				<label htmlFor="input-type-text">Text input label</label>
				<input id="input-type-text" name="input-type-text" type="text" />

				<label htmlFor="input-focus">Text input focused</label>
				<input className="usa-input-focus" id="input-focus" name="input-focus" type="text" />

				<div className="usa-input-error">
				<label className="usa-input-error-label" htmlFor="input-error">Text input error</label>
				<span className="usa-input-error-message" id="input-error-message" role="alert">Helpful error message</span>
				<input id="input-error" name="input-error" type="text" aria-describedby="input-error-message" />
				</div>

				<label htmlFor="input-success">Text input success</label>
				<input className="usa-input-success" id="input-success" name="input-success" type="text" />

				<label htmlFor="input-type-textarea">Text area label</label>
				<textarea id="input-type-textarea" name="input-type-textarea"></textarea>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h4>H4 Header - Dropdown</h4>
				<form className="usa-form">
					<label htmlFor="options">Dropdown label</label>
					<select name="options" id="options">
						<option value="value1">Option A</option>
						<option value="value2">Option B</option>
						<option value="value3">Option C</option>
					</select>
				</form>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h4>Checkboxes</h4>
				<fieldset className="usa-fieldset-inputs usa-sans">
					<legend className="usa-sr-only">Historical figures 1</legend>
					<ul className="usa-unstyled-list">
						<li>
							<input id="truth" type="checkbox" name="historical-figures-1" value="truth" checked />
							<label htmlFor="truth">Sojourner Truth</label>
						</li>
						<li>
							<input id="douglass" type="checkbox" name="historical-figures-1" value="douglass" />
							<label htmlFor="douglass">Frederick Douglass</label>
						</li>
						<li>
							<input id="washington" type="checkbox" name="historical-figures-1" value="washington" />
							<label htmlFor="washington">Booker T. Washington</label>
						</li>
						<li>
							<input id="carver" type="checkbox" name="historical-figures-1" disabled />
							<label htmlFor="carver">George Washington Carver</label>
						</li>
					</ul>
				</fieldset>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h4>Radio Buttons</h4>
				<fieldset className="usa-fieldset-inputs usa-sans">
					<legend className="usa-sr-only">Historical figures 2</legend>
					<ul className="usa-unstyled-list">
						<li>
							<input id="stanton" type="radio" name="historical-figures-2" value="stanton" />
							<label htmlFor="stanton">Elizabeth Cady Stanton</label>
						</li>
						<li>
							<input id="anthony" type="radio" name="historical-figures-2" value="anthony" />
							<label htmlFor="anthony">Susan B. Anthony</label>
						</li>
						<li>
							<input id="tubman" type="radio" name="historical-figures-2" value="tubman" />
							<label htmlFor="tubman">Harriet Tubman</label>
						</li>
					</ul>
				</fieldset>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<fieldset>
					<legend>Date of birth</legend>
					<span className="usa-form-hint" id="dobHint">For example: 04 28 1986</span>
					<div className="usa-date-of-birth">
						<div className="usa-form-group usa-form-group-month">
							<label htmlFor="date_of_birth_1">Month</label>
							<input className="usa-input-inline" aria-describedby="dobHint" id="date_of_birth_1" name="date_of_birth_1" pattern="0?[1-9]|1[012]" type="number" min="1" max="12" value="" />
						</div>
						<div className="usa-form-group usa-form-group-day">
							<label htmlFor="date_of_birth_2">Day</label>
							<input className="usa-input-inline" aria-describedby="dobHint" id="date_of_birth_2" name="date_of_birth_2" pattern="0?[1-9]|1[0-9]|2[0-9]|3[01]" type="number" min="1" max="31" value="" />
						</div>
						<div className="usa-form-group usa-form-group-year">
							<label htmlFor="date_of_birth_3">Year</label>
							<input className="usa-input-inline" aria-describedby="dobHint" id="date_of_birth_3" name="date_of_birth_3" pattern="[0-9]{4}" type="number" min="1900" max="2000" value="" />
						</div>
					</div>
				</fieldset>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<h3>Info Gathering Forms</h3>
				<form className="usa-form wrap-border wrap-padding">
					<fieldset>
						<legend>Name</legend>
						<label htmlFor="title">Title</label>
						<input className="usa-input-tiny" id="title" name="title" type="text" />

						<label htmlFor="first-name">First name <span className="usa-additional_text">Required</span></label>
						<input id="first-name" name="first-name" type="text" required="" aria-required="true" />

						<label htmlFor="middle-name">Middle name</label>
						<input id="middle-name" name="middle-name" type="text" />

						<label htmlFor="last-name">Last name <span className="usa-additional_text">Required</span></label>
						<input id="last-name" name="last-name" type="text" required="" aria-required="true" />

						<label htmlFor="suffix">Suffix</label>
						<input className="usa-input-tiny" id="suffix" name="suffix" type="text" />
					</fieldset>
				</form>
			</div>
			<div className="usa-width-one-whole add-hmargin">
				<form className="usa-form-large wrap-border wrap-padding">
					<fieldset>
						<legend>Mailing address</legend>
						<label htmlFor="mailing-address-1">Street address 1</label>
						<input id="mailing-address-1" name="mailing-address-1" type="text" />

						<label htmlFor="mailing-address-2">Street address 2 <span className="usa-additional_text">Optional</span></label>
						<input id="mailing-address-2" name="mailing-address-2" type="text" />

						<div>
							<div className="usa-input-grid usa-input-grid-medium">
								<label htmlFor="city">City</label>
								<input id="city" name="city" type="text" />
							</div>

							<div className="usa-input-grid usa-input-grid-small">
								<label htmlFor="state">State</label>
								<select id="state" name="state">
									<option value=""></option>
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District of Columbia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
							</div>
						</div>

						<label htmlFor="zip">ZIP</label>
						<input className="usa-input-medium" id="zip" name="zip" type="text" pattern="[\d]{5}(-[\d]{4})?" data-grouplength="5,4" data-delimiter="-" data-politespace="" />
					</fieldset>
				</form>
			</div>
		</div>
		);
	}
}
