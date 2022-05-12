import React from "react";
import SwipeableViews from "react-swipeable-views";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';

const TabContainer = ({children, dir}) => (
	<Typography
		component="div"
		dir={dir}
		style={{padding: 2 * 3}}>
		{children}
	</Typography>
);

// TabContainer.propTypes = {
//   children : PropTypes.node.isRequired,
//   dir : PropTypes.string.isRequired,
// };

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 325,
	},
});

class CamelotDescription extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({value});
	};

	handleChangeIndex = index => {
		this.setState({value: index});
	};

	render() {
		const {classes, theme} = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
					>
						<Tab label="About"/>
						{/*<Tab label="Item Two"/>*/}
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabContainer dir={theme.direction}>
						<p>
							Key Mixing or Harmonic Mixing is simply the mixing of tracks with the same or a compatible key.
							The Camelot Wheel is a common tool to visually show DJs what these keys are and how they relate to each
							other.
						</p>
						<p>
							Software solutions such as Rekordbox, Traktor, etc. are not 100% perfect.
							However, they are all excellent at what they do when it comes to analyzing tracks for key information.
							As with anything, The Camelot Wheel should be used simply as a guide. Once you understand these "rules",
							you can learn when you can break them.
						</p>
						<p>
							Sometimes it may be best to trust your ears if a mix is working or not rather than a computer algorithm
							tell you that two tracks are compatible. Most vinyl didn"t contain key information and either you had to
							do the legwork yourself to identify the key or become intimately familiar with your records and trust your
							ears.
						</p>
					</TabContainer>
					{/*<TabContainer dir={theme.direction}>Item Two</TabContainer>*/}
				</SwipeableViews>
			</div>
		);
	}
}

export default withStyles(styles, {withTheme: true})(CamelotDescription);
