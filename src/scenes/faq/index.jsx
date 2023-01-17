import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently Asked Questions Page" />

			<Accordion defaultExpanded>
				<AccordianSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} varient="h5">
						An Important Question
					</Typography>
				</AccordianSummary>
				<AccordianDetails>
					<Typography>
						This is a toy project to explore some of the interesting
						librarys and bootstraps, that can be utalised with
						React.js
					</Typography>
				</AccordianDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordianSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} varient="h5">
						Another Important Question
					</Typography>
				</AccordianSummary>
				<AccordianDetails>
					<Typography>
						This is a toy project to explore some of the interesting
						librarys and bootstraps, that can be utalised with
						React.js
					</Typography>
				</AccordianDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordianSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} varient="h5">
						An Even More Important Question
					</Typography>
				</AccordianSummary>
				<AccordianDetails>
					<Typography>
						This is a toy project to explore some of the interesting
						librarys and bootstraps, that can be utalised with
						React.js
					</Typography>
				</AccordianDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordianSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} varient="h5">
						Favourite Question
					</Typography>
				</AccordianSummary>
				<AccordianDetails>
					<Typography>
						This is a toy project to explore some of the interesting
						librarys and bootstraps, that can be utalised with
						React.js
					</Typography>
				</AccordianDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordianSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} varient="h5">
						An Great Question
					</Typography>
				</AccordianSummary>
				<AccordianDetails>
					<Typography>
						This is a toy project to explore some of the interesting
						librarys and bootstraps, that can be utalised with
						React.js
					</Typography>
				</AccordianDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordianSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} varient="h5">
						Final Question
					</Typography>
				</AccordianSummary>
				<AccordianDetails>
					<Typography>
						This is a toy project to explore some of the interesting
						librarys and bootstraps, that can be utalised with
						React.js
					</Typography>
				</AccordianDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
