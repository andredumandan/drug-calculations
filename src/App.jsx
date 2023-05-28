import { useState } from 'react';
import './App.css';
import logo from '../public/logo.png';
import lilogo from '../public/linkedin.png'
import iglogo from '../public/ig.png'
import ghlogo from '../public/github.png'

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

  const formula = "Desired Dose (mg) / Tablet Strength (mg)";

  return (
    <div className="calculator">
      <h2>Tablet Dosage Calculator</h2>
      <p>Formula: {formula}</p>
      <div className="input-group">
        <label>Tablet Strength / Stock Dose (mg):</label>
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

  const formula = "(Volume (ml) * Concentration (mg/ml)) / 1000";

  return (
    <div className="calculator">
      <h2>Mixture and Solution Calculator</h2>
      <p>Formula: {formula}</p>
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
  const [timeUnit, setTimeUnit] = useState('minutes');
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

  const handleTimeUnitChange = (event) => {
    setTimeUnit(event.target.value);
  };

  const handleDropFactorChange = (event) => {
    setDropFactor(event.target.value);
  };

  const handleCalculate = () => {
    let timeInMinutes = parseFloat(time);
    if (timeUnit === 'hours') {
      timeInMinutes *= 60;
    }

    const calculatedMlPerHour = parseFloat(volume) / timeInMinutes;
    setResultMlPerHour(isNaN(calculatedMlPerHour) ? '' : calculatedMlPerHour.toFixed(2));

    const calculatedMlPerMinute = calculatedMlPerHour / 60;
    setResultMlPerMinute(isNaN(calculatedMlPerMinute) ? '' : calculatedMlPerMinute.toFixed(2));

    const calculatedDropsPerMinute = (parseFloat(volume) / timeInMinutes) * parseFloat(dropFactor);
    setResultDropsPerMinute(isNaN(calculatedDropsPerMinute) ? '' : calculatedDropsPerMinute.toFixed(2));

    const calculatedRemainingTime = (parseFloat(volume) / calculatedDropsPerMinute) * parseFloat(dropFactor);
    setResultRemainingTime(isNaN(calculatedRemainingTime) ? '' : calculatedRemainingTime.toFixed(2));
  };

  const formula = "(Volume (ml) / Time (minutes)) * Drop Factor";

  return (
    <div className="calculator">
      <h2>IV Flow Rate Calculator</h2>
      <p>Formula: {formula}</p>
      <div className="input-group">
        <label>Total IV Volume (ml):</label>
        <input type="number" value={volume} onChange={handleVolumeChange} />
      </div>
      <div className="input-group">
        <label>Time:</label>
        <input type="number" value={time} onChange={handleTimeChange} />
        <select className="time-unit" value={timeUnit} onChange={handleTimeUnitChange}>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
        </select>
      </div>
      <div className="input-group">
        <label>Drop Factor:</label>
        <input type="number" value={dropFactor} onChange={handleDropFactorChange} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>ML per Hour: {resultMlPerHour} ml/hr</p>
      <p>ML per Minute: {resultMlPerMinute} ml/min</p>
      <p>Drops per Minute: {resultDropsPerMinute} gtts/min</p>
      <p>Remaining Time of Infusion: {resultRemainingTime} minutes</p>
    </div>
  );
}

function BodySurfaceAreaCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = Math.sqrt((parseFloat(height) * parseFloat(weight)) / 3600);
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  const formula = "√(Height (cm) * Weight (kg) / 3600)";

  return (
    <div className="calculator">
      <h2>Body Surface Area Calculator</h2>
      <p>Formula: {formula}</p>
      <div className="input-group">
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result} m²</p>
    </div>
  );
}

function PediatricDosageCalculator() {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = (parseFloat(weight) * parseFloat(age)) / 100;
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  const formula = "(Weight (kg) * Age (months)) / 100";

  return (
    <div className="calculator">
      <h2>Pediatric Dosage Calculator</h2>
      <p>Formula: {formula}</p>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div className="input-group">
        <label>Age (months):</label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result} mg</p>
    </div>
  );
}

function ContinuousInfusionCalculator() {
  const [dose, setDose] = useState('');
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const handleDoseChange = (event) => {
    setDose(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = (parseFloat(dose) * parseFloat(weight)) / (parseFloat(time) * 60);
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  const formula = "(Dose (mg/kg/min) * Weight (kg)) / (Time (hours) * 60)";

  return (
    <div className="calculator">
      <h2>Continuous Infusion Calculator</h2>
      <p>Formula: {formula}</p>
      <div className="input-group">
        <label>Dose (mg/kg/min):</label>
        <input type="number" value={dose} onChange={handleDoseChange} />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div className="input-group">
        <label>Time (hours):</label>
        <input type="number" value={time} onChange={handleTimeChange} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result} ml/hr</p>
    </div>
  );
}

function TitrationCalculator() {
  const [initialDose, setInitialDose] = useState('');
  const [targetDose, setTargetDose] = useState('');
  const [result, setResult] = useState('');

  const handleInitialDoseChange = (event) => {
    setInitialDose(event.target.value);
  };

  const handleTargetDoseChange = (event) => {
    setTargetDose(event.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = parseFloat(targetDose) - parseFloat(initialDose);
    setResult(isNaN(calculatedResult) ? '' : calculatedResult.toFixed(2));
  };

  const formula = "Target Dose (mg) - Initial Dose (mg)";

  return (
    <div className="calculator">
      <h2>Titration Calculator</h2>
      <p>Formula: {formula}</p>
      <div className="input-group">
        <label>Initial Dose (mg):</label>
        <input type="number" value={initialDose} onChange={handleInitialDoseChange} />
      </div>
      <div className="input-group">
        <label>Target Dose (mg):</label>
        <input type="number" value={targetDose} onChange={handleTargetDoseChange} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result} mg</p>
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
      case 'bodySurfaceArea':
        return <BodySurfaceAreaCalculator />;
      case 'pediatricDosage':
        return <PediatricDosageCalculator />;
      case 'continuousInfusion':
        return <ContinuousInfusionCalculator />;
      case 'titration':
        return <TitrationCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo-header" />
      <h1>Drug Calculations</h1>
      <h4>Calculate drug dosages with ease!</h4>
      <select value={selectedOption} onChange={handleDropdownChange} className="select-container">
        <option value="">Select an option</option>
        <option value="tabletDosage">Tablet Dosages</option>
        <option value="mixtureSolution">Mixtures and Solutions</option>
        <option value="ivRate">IV Flow Rate</option>
        <option value="bodySurfaceArea">Body Surface Area</option>
        <option value="pediatricDosage">Pediatric Dosage</option>
        <option value="continuousInfusion">Continuous Infusion</option>
        <option value="titration">Titration</option>
      </select>
      <div id="calculatorContainer">{renderCalculator()}</div>
      <p>DISCLAIMER: The drug dosage calculator provided on this website is for educational purposes only. The results have not been verified by professionals and the formulas used were referenced from the internet. It is not a substitute for professional medical advice. Consult with healthcare professionals for accurate dosing recommendations and personalized medical guidance.</p>
      <button className="dropdown-toggle" onClick={handleToggleAbout}>
        About
      </button>
      {showAbout && (
        <div className="about-content">
          <p>
            Drug Calculations is an educational web app that helps people in the medical field practice and improve their drug dosage calculation skills. With interactive calculators for tablet dosages, mixtures and solutions, IV flow rates, body surface area, pediatric dosage, continuous infusion, and titration, users can enhance their understanding and gain hands-on experience. Streamline your learning and master essential medication calculations with Drug Calculations.
            <br />
            <br />
            This calculator was created and is maintained by Andre Dumandan, a student at the Ateneo de Manila University. Feedback is greatly appreciated!
          </p>
        </div>
      )}
      <div className="social-media">
        <a target="_blank" href="https://github.com/andredumandan">
          <img src={ghlogo} alt='GitHub' className='logo' />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/andre-dumandan/">
          <img src={lilogo} alt='LinkedIn' className='logo' />
        </a>
        <a target="_blank" href="https://www.instagram.com/andredumandan/">
          <img src={iglogo} alt='Instagram' className='logo' />
        </a>
      </div>
      <br />
      <copyright>© 2023 Andre Dumandan</copyright>
    </div>
  );
}

export default App;
