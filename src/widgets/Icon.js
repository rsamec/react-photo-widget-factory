import React from 'react';
import styleSvg from './utils/styleSvg';

import * as md from 'react-icons/lib/md';

let box = (props) => {
	var style = {};

	//size
	if (!!props.height) style.height = props.height;
	if (!!props.width) style.width = props.width;
	if (!!props.minWidth) style.minWidth = props.minWidth;
	if (!!props.minHeight) style.minHeight = props.minHeight;

	var icon = md[props.icon];	

	if (icon === undefined) return React.DOM.span(null, 'Icon ' + props.icon + ' is not register among icons.');
	var iconProps = styleSvg(style,props);
	
	return React.createElement(icon,iconProps,null);
}
box.defaultProps = {icon:'Md3dRotation',minWidth:100,minHeight:100};
export default box;
