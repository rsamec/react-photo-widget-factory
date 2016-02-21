import React from 'react';
import styleSvg from './utils/styleSvg';

import {MorphReplace} from 'react-svg-morph';
import * as md from 'react-icons/lib/md';
let iconCounter = 0;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.increment = 0;
		this.swap();
	}
	swap() {
		setInterval(() => {
			this.increment++;
			this.forceUpdate();
		}, 1500)
	}
	render() {
		var props = this.props;
		var style = {};

		//size
		if (!!props.height) style.height = props.height;
		if (!!props.width) style.width = props.width;
		if (!!props.minWidth) style.minWidth = props.minWidth;
		if (!!props.minHeight) style.minHeight = props.minHeight;


		var fromIcon = md[props.from];
		var toIcon = md[props.to];

		if (fromIcon === undefined || toIcon === undefined) return React.DOM.span(null, 'Icon ' + props.icon + ' is not register among icons.');

		var keyFrom = props.from + iconCounter++;
		var keyTo = props.to + iconCounter++;

		var fromIconProps = styleSvg({key:keyFrom},props);
		var toIconProps = styleSvg({key:keyTo},props);
		
		var icon = this.increment % 2 === 1 ?  React.createElement(fromIcon,fromIconProps,null): React.createElement(toIcon,toIconProps,null);
		return (<MorphReplace duration={props.duration}  width={props.width} height={props.height}>
			{icon}
		</MorphReplace>);
	}
};
App.defaultProps = {from:'Md3dRotation',to:'MdAcUnit',minWidth:100,minHeight:100};
