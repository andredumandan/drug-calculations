import { useState } from 'react';
import './App.css';

function TabletDosageCalculator() {
  const [tabletStrength, setTabletStrength] = useState('');
  const [desiredDose, setDesiredDose] = useState('');
  const [result, setResult] = useState('');

  const handleTabletStrengthChange = (event) => {
    setTabletStrength(event.target.value);
  };

  const handleDesiredDoseChange = (event) => {
    setDesiredDose(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = parseFloat(desiredDose) / parseFloat(tabletStrength);
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  return (
    <div>
      <h2>Tablet Dosage Calculator</h2>
      <p>Tablet Strength (mg):</p>
      <input type="number" value={tabletStrength} onChange={handleTabletStrengthChange} />
      <p>Desired Dose (mg):</p>
      <input type="number" value={desiredDose} onChange={handleDesiredDoseChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result} tablets</p>
    </div>
  );
}

function MixtureSolutionCalculator() {
  const [volume, setVolume] = useState('');
  const [concentration, setConcentration] = useState('');
  const [result, setResult] = useState('');

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleConcentrationChange = (event) => {
    setConcentration(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = (parseFloat(desiredDose) / parseFloat(concentration)) * parseFloat(volume);
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  return (
    <div>
      <h2>Mixture and Solution Calculator</h2>
      <p>Volume (ml):</p>
      <input type="number" value={volume} onChange={handleVolumeChange} />
      <p>Concentration (mg/ml):</p>
      <input type="number" value={concentration} onChange={handleConcentrationChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result} ml</p>
    </div>
  );
}

function IVRateCalculator() {
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState('');
  const [dropFactor, setDropFactor] = useState('');
  const [resultMlPerHour, setResultMlPerHour] = useState('');
  const [resultMlPerMinute, setResultMlPerMinute] = useState('');
  const [resultDropsPerMinute, setResultDropsPerMinute] = useState('');
  const [resultRemainingTime, setResultRemainingTime] = useState('');

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDropFactorChange = (event) => {
    setDropFactor(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedMlPerHour = parseFloat(volume) / parseFloat(time);
    setResultMlPerHour(isNaN(calculatedMlPerHour) ? '' : calculatedMlPerHour.toFixed(2));

    const calculatedMlPerMinute = calculatedMlPerHour / 60;
    setResultMlPerMinute(isNaN(calculatedMlPerMinute) ? '' : calculatedMlPerMinute.toFixed(2));

    const calculatedDropsPerMinute = (parseFloat(volume) / parseFloat(time)) * parseFloat(dropFactor);
    setResultDropsPerMinute(isNaN(calculatedDropsPerMinute) ? '' : calculatedDropsPerMinute.toFixed(2));

    const calculatedRemainingTime = (parseFloat(volume) / calculatedDropsPerMinute) * parseFloat(dropFactor);
    setResultRemainingTime(isNaN(calculatedRemainingTime) ? '' : calculatedRemainingTime.toFixed(2));
  };

  return (
    <div>
      <h2>IV Rate Calculator</h2>
      <p>Total IV Volume (ml):</p>
      <input type="number" value={volume} onChange={handleVolumeChange} />
      <p>Time (minutes):</p>
      <input type="number" value={time} onChange={handleTimeChange} />
      <p>Drop Factor:</p>
      <input type="number" value={dropFactor} onChange={handleDropFactorChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <p>ML per Hour: {resultMlPerHour} ml/hr</p>
      <p>ML per Minute: {resultMlPerMinute} ml/min</p>
      <p>Drops per Minute: {resultDropsPerMinute} drops/min</p>
      <p>Remaining Time of Infusion: {resultRemainingTime} minutes</p>
    </div>
  );
}

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <h1>Drug Calculations</h1>
      <h4>A web application to help nurses compute for drug dosages</h4>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="tabletDosage">Tablet Dosages</option>
        <option value="mixtureSolution">Mixtures and Solutions</option>
        <option value="ivRate">IV Rate</option>
      </select>

      {selectedOption === 'tabletDosage' && <TabletDosageCalculator />}
      {selectedOption === 'mixtureSolution' && <MixtureSolutionCalculator />}
      {selectedOption === 'ivRate' && <IVRateCalculator />}
    </>
  );
}

export default App;
