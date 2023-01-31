import { Box, TextField, useTheme, Button, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { Formik } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";
import dayjs from "dayjs";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProgressCircle from "../../components/ProgressCircle";

const initialValues = {
	dateFrom: dayjs(new Date()),
	dateTo: dayjs(new Date()),
};

const userSchema = yup.object().shape({
	dateFrom: yup.date(),
	dateTo: yup.date(),
});

const DateRangeDisplay = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const [value2, setValue2] = useState(null);
	const [value3, setValue3] = useState(null);

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<Box>
			<Box>
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
								{/* DATE FROM */}
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										inputFormat="DD.MM.YYYY"
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
								{/* DATE TO */}
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										inputFormat="DD.MM.YYYY"
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
													touched.dateTo &&
													errors.dateTo
												}
												sx={{
													gridColumn: "3 / span 2",
												}}
												{...params}
											/>
										)}
									/>
								</LocalizationProvider>
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
			{/* PROGRESS */}
			<Box
				gridColumn="span 4"
				gridRow="span 2"
				backgroundColor={colors.primary[400]}
				p="30px"
			>
				<Typography variant="h5" fontWeight="600">
					Drinks By Date Range
				</Typography>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					mt="25px"
				>
					<ProgressCircle size="125" />
					<Typography
						variant="h5"
						color={colors.greenAccent[500]}
						sx={{ mt: "15px" }}
					>
						This month you have had 6 drinks
					</Typography>
					<Typography>This is 60% of your monthly target</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default DateRangeDisplay;
