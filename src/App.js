import './App.css';
import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import{
  MuiPickersUtilsProvider,
/*   KeyboardTimePicker,
  KeyboardDatePicker */
  DatePicker
} from '@material-ui/pickers'
import { useState } from 'react';
import esLocale from 'date-fns/locale/es';


function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <div style={{ margin:"5%"}}>
      <DatePicker
        disableFuture
        openTo='date'
        format='dd/MM/yyyy'
        label='Seleccione la fecha'
        views={['year', 'month', 'date']}
        value={selectedDate}
        onChange={handleDateChange}
        variant='dialog'
        cancelLabel='Cancelar'
        allowKeyboardControl={true}
      />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;

/* function App() {

const [selectedDate, setSelectedDate] = useState(
  new Date("2020-09-11T12:00:00")
)

const handleDateChange = (date) => {
  setSelectedDate(date)
}

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='space-around'>
          <KeyboardDatePicker 
          disableToolbar
          variant='dialog'
          format='MM/dd/yyy'
          margin='normal'
          id='date-picker'
          label='Date Picker'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
          />

          <KeyboardTimePicker
            margin='normal'
            id='time-picker'
            label="Time Picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;*/
