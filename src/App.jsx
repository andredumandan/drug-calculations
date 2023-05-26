import { useState } from 'react';
import './App.css';
import logo from '../public/logo.png';

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
    <div className="calculator">
      <h2>Tablet Dosage Calculator</h2>
      <div className="input-group">
        <label>Tablet Strength (mg):</label>
        <input type="number" value={tabletStrength} onChange={handleTabletStrengthChange} />
      </div>
      <div className="input-group">
        <label>Desired Dose (mg):</label>
        <input type="number" value={desiredDose} onChange={handleDesiredDoseChange} />
      </div>
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
    const calculatedResult = (parseFloat(volume) * parseFloat(concentration)) / 1000;
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Mixture and Solution Calculator</h2>
      <div className="input-group">
        <label>Volume (ml):</label>
        <input type="number" value={volume} onChange={handleVolumeChange} />
      </div>
      <div className="input-group">
        <label>Concentration (mg/ml):</label>
        <input type="number" value={concentration} onChange={handleConcentrationChange} />
      </div>
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
    <div className="calculator">
      <h2>IV Flow Rate Calculator</h2>
      <div className="input-group">
        <label>Total IV Volume (ml):</label>
        <input type="number" value={volume} onChange={handleVolumeChange} />
      </div>
      <div className="input-group">
        <label>Time (minutes):</label>
        <input type="number" value={time} onChange={handleTimeChange} />
      </div>
      <div className="input-group">
        <label>Drop Factor:</label>
        <input type="number" value={dropFactor} onChange={handleDropFactorChange} />
      </div>
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
  const [showAbout, setShowAbout] = useState(false);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleToggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const renderCalculator = () => {
    switch (selectedOption) {
      case 'tabletDosage':
        return <TabletDosageCalculator />;
      case 'mixtureSolution':
        return <MixtureSolutionCalculator />;
      case 'ivRate':
        return <IVRateCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="logo" className='logo-header' />
      <h1>Drug Calculations</h1>
      <h4>Calculate drug dosages with ease!</h4>
      <select value={selectedOption} onChange={handleDropdownChange} className="select-container">
        <option value="">Select an option</option>
        <option value="tabletDosage">Tablet Dosages</option>
        <option value="mixtureSolution">Mixtures and Solutions</option>
        <option value="ivRate">IV Flow Rate</option>
      </select>
      <div id="calculatorContainer">{renderCalculator()}</div>
      <body>DISCLAIMER: Results of this calculator have not been verified by any professional. Formulas used were referenced from the internet.</body>

      <button className="dropdown-toggle" onClick={handleToggleAbout}>
        About
      </button>
      {showAbout && (
        <div className="about-content">
          <p>
            Drug Calculations is an educational web app that helps people in the medical field practice and improve their drug dosage calculation skills. With interactive calculators for tablet dosages, mixtures and solutions, and IV rates, users can enhance their understanding and gain hands-on experience. Streamline your learning and master essential medication calculations with Drug Calculations.
            <br/>
            <br/>
            This calculator was created and is maintained by Andre Dumandan, a student at the Ateneo de Manila University.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
