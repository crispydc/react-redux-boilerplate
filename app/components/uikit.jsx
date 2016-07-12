import '../sass/uikit.scss';

import React, {Component} from 'react';

export default class Uikit extends Component {
  render() {
    return (
    <div className="uikit">
      <h2>H2 Header: UI Kit</h2>
      <p><b>This is the paragraph style.</b> Icing donut cupcake. Gingerbread biscuit jelly gummi bears. Lemon drops tootsie roll lemon drops chocolate marshmallow candy canes. Tiramisu chocolate pudding jelly. Tootsie roll jelly-o tootsie roll soufflé muffin tootsie roll sweet sugar plum. Candy caramels tart chocolate cake icing. Donut chocolate cake donut wafer marzipan sweet cotton candy toffee. Croissant oat cake ice cream. Cheesecake jelly-o pie topping cake donut muffin. Oat cake topping gingerbread cheesecake jelly-o lemon drops. Jelly-o sweet roll wafer biscuit donut toffee topping candy. Tootsie roll cotton candy cake liquorice lollipop topping jelly-o gummies.</p>
      <h3>H3 Header: Buttons</h3>
	    <button>Primary Button - Default</button>
	    <button className="usa-button-secondary">Secondary Button - Default</button>
	    <button className="usa-button-focus">Focus Button - Default</button>
	    <button className="usa-button-disabled" disabled="">Disabled Button - Default</button>
	    <button className="usa-button-big" type="button">"Big Button" - Default</button>
      </div>
    );
  }
}
