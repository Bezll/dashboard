import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
	Box,
	Button,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
	addDrink: "",
	amount: 0,
	dateFrom: "",
	dateTo: "",
};

const userSchema = yup.object().shape({
	addDrink: yup.date().required("required"),
	amount: yup.number().required("required"),
	dateFrom: yup.string(),
	dateTo: yup.string(),
});

const DrinkApp = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const [value, setValue] = useState(null);
	const [value2, setValue2] = useState(null);
	const [value3, setValue3] = useState(null);

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<Box m="20px">
			<Header title="Drink Monitor" subtitle="App to record drinks" />
			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={userSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(6, minmax(0, 1fr))"
							sx={{
								"& > div": {
									gridColumn: isNonMobile
										? undefined
										: "span 6",
								},
							}}
						>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{
										gridColumn: "3 / span 2",
									}}
									label="Add Drink"
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => (
										<TextField
											fullWidth
											variant="filled"
											type="date"
											value={values.addDrink}
											onBlur={handleBlur}
											onChange={handleChange}
											name="addDrink"
											error={
												!!touched.addDrink &&
												!!errors.addDrink
											}
											helperText={
												touched.addDrink &&
												errors.addDrink
											}
											sx={{
												gridColumn: "3 / span 2",
											}}
											{...params}
										/>
									)}
								/>
							</LocalizationProvider>

							{/* <TextField
								fullWidth
								variant="filled"
								type="date"
								label="Add Drink"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.addDrink}
								name="addDrink"
								error={!!touched.addDrink && !!errors.addDrink}
								helperText={touched.addDrink && errors.addDrink}
								sx={{
									gridColumn: "3 / span 2",
								}}
							/> */}

							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Amount - ml"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.amount}
								name="amount"
								error={!!touched.amount && !!errors.amount}
								helperText={touched.amount && errors.amount}
								sx={{
									gridColumn: "3 / span 2",
								}}
							/>
							<FormControl
								sx={{ gridColumn: "span 6" }}
								align="center"
							>
								<FormLabel id="demo-radio-buttons-group-label">
									Drink Type
								</FormLabel>
								<RadioGroup
									row
									aria-labelledby="demo-radio-buttons-group-label"
									name="radio-buttons-group"
									sx={{
										gridColumn: "span 6",
										display: "inline-block",
									}}
								>
									<FormControlLabel
										value="beer"
										control={<Radio />}
										label="Beer"
									/>
									<FormControlLabel
										value="spirts"
										control={<Radio />}
										label="Sprirts"
									/>
									<FormControlLabel
										value="wine"
										control={<Radio />}
										label="Wine"
									/>
								</RadioGroup>
							</FormControl>
							<Box
								display="flex"
								justifyContent="center"
								sx={{ gridColumn: "3 / span 2" }}
							>
								<Button
									type="submit"
									color="secondary"
									varient="contained"
								>
									Submit
								</Button>
							</Box>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{
										gridColumn: "3 / span 2",
									}}
									label="From"
									value={value2}
									onChange={(newValue2) => {
										setValue2(newValue2);
									}}
									renderInput={(params) => (
										<TextField
											fullWidth
											variant="filled"
											type="date"
											value={values.dateFrom}
											onBlur={handleBlur}
											onChange={handleChange}
											name="dateFrom"
											error={
												!!touched.dateFrom &&
												!!errors.dateFrom
											}
											helperText={
												touched.dateFrom &&
												errors.dateFrom
											}
											sx={{
												gridColumn: "3 / span 2",
											}}
											{...params}
										/>
									)}
								/>
							</LocalizationProvider>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{
										gridColumn: "3 / span 2",
									}}
									label="To"
									value={value3}
									onChange={(newValue3) => {
										setValue3(newValue3);
									}}
									renderInput={(params) => (
										<TextField
											fullWidth
											variant="filled"
											type="date"
											value={values.dateTo}
											onBlur={handleBlur}
											onChange={handleChange}
											name="dateTo"
											error={
												!!touched.dateTo &&
												!!errors.dateTo
											}
											helperText={
												touched.dateTo && errors.dateTo
											}
											sx={{
												gridColumn: "3 / span 2",
											}}
											{...params}
										/>
									)}
								/>
							</LocalizationProvider>
							{/* <TextField
								fullWidth
								variant="filled"
								type="date"
								label="Date From"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.dateFrom}
								name="dateFrom"
								error={!!touched.dateFrom && !!errors.dateFrom}
								helperText={touched.dateFrom && errors.dateFrom}
								sx={{ gridColumn: "3 / span 2" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="date"
								label="Date To"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.dateTo}
								name="dateTo"
								error={!!touched.dateTo && !!errors.dateTo}
								helperText={touched.dateTo && errors.dateTo}
								sx={{ gridColumn: "3 / span 2" }}
							/> */}
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default DrinkApp;
