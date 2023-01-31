import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import dayjs from "dayjs";
import DateRangeDisplay from "./DateRangeDisplay";
import * as yup from "yup";
import { useState } from "react";
import { Formik } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { tokens } from "../../theme";
import {
	Box,
	Button,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	useTheme,
} from "@mui/material";

const initialValues = {
	addDrink: dayjs(new Date()),
	amount: 0,
	drinkType: "",
	dateFrom: dayjs(new Date()),
	dateTo: dayjs(new Date()),
};

const userSchema = yup.object().shape({
	addDrink: yup.date().required("required"),
	amount: yup.number().required("required"),
	drinkType: yup.string().required("required"),
	dateFrom: yup.date(),
	dateTo: yup.date(),
});

const DrinkApp = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const [value, setValue] = useState(null);

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<Box>
			<Box m="20px">
				<Header
					title="Drink Monitor"
					subtitle="App to monitor alcohol consumption"
				/>
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
								{/* ADD DRINK  */}
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										inputFormat="DD.MM.YYYY"
										label="Add Drink"
										value={value ?? values.addDrink}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										name="addDrink"
										onBlur={handleBlur}
										renderInput={(params) => (
											<TextField
												fullWidth
												variant="filled"
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
								{/* AMOUNT  */}
								<TextField
									fullWidth
									variant="filled"
									type="text"
									label="Amount Consumed in ML"
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
								{/* DRINK TYPE RADIO */}
								<FormControl
									sx={{ gridColumn: "3 / span 2" }}
									align="center"
								>
									<FormLabel
										id="demo-radio-buttons-group-label"
										sx={{
											display: "inline-block",
											backgroundColor:
												colors.greenAccent[500],
										}}
									>
										Drink Type
									</FormLabel>
									<RadioGroup
										row
										aria-labelledby="demo-radio-buttons-group-label"
										name="drinkType"
										onBlur={handleBlur}
										onChange={handleChange}
										sx={{
											display: "inline-block",
											backgroundColor:
												colors.greenAccent[500],
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
								{/* SUBMIT BUTTON  */}
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
							</Box>
						</form>
					)}
				</Formik>
			</Box>
			<DateRangeDisplay />
		</Box>
	);
};

export default DrinkApp;

/* <TextField
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
/> */
