import '../sass/uikit.scss';

import React, {Component} from 'react';

export default class Uikit extends Component {
  render() {
	return (
		<div className="uikit usa-grid">
			<h2>H2 Header: UI Kit</h2>
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
				<form className="usa-form">
					<label htmlFor="options">Dropdown label</label>
					<select name="options" id="options">
						<option value="value1">Option A</option>
						<option value="value2">Option B</option>
						<option value="value3">Option C</option>
					</select>
				</form>
			</div>
		</div>
		);
	}
}
