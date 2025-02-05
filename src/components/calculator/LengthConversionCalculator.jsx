import React, { useState } from 'react';

const LengthConversionCalculator = () => {
    const [values, setValues] = useState({
        val1: '',
        val2: '',
        val3: '',
        val4: '',
        val5: ''
    });

    const factors = {
        val1: 10,
        val2: 0.3937007874,
        val3: 0.01,
        val4: 0.03280839895,
        val5: 0.0
    };

    const handleFocus = (e) => {
        setValues({
            val1: '',
            val2: '',
            val3: '',
            val4: '',
            val5: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const firstValue = value / factors[name];
        
        setValues({
            val1: formatValue(firstValue * factors.val1),
            val2: formatValue(firstValue * factors.val2),
            val3: formatValue(firstValue * factors.val3),
            val4: formatValue(firstValue * factors.val4),
            val5: formatValue(firstValue * factors.val5)
        });
    };

    const formatValue = (input) => {
        const strin = "" + input;
        const fltin = parseFloat(strin);
        
        if (strin.length <= 7) return strin;
        
        if (strin.indexOf("e") !== -1 || fltin > parseFloat("9999999.4")) return "***************";
        
        const rounded = "" + (fltin + (fltin - parseFloat(strin.substring(0, 7))));
        
        return rounded.substring(0, 7);
    };

    return (
        <form style={{backgroundColor:'#6699CC'}} 
        // onMouseOver={(e) => e.target.style.backgroundColor='#e4ba63'} onMouseOut={(e) => e.target.style.backgroundColor='#6699CC'}
        >
            <table cellSpacing="0" cellPadding="0" border="0" className="table">
                <tbody>
                    <tr bgColor="#888888">
                        <td height="2" colSpan="6">
                            <div align="left">
                                <font face="MS Sans Serif" color="#ffffff" size="1"><b>Length Conversion Calculator</b></font>
                            </div>
                        </td>
                    </tr>
                    <tr align="middle" bgColor="#EEEEEE">
                        <td width="71"><font face="MS Sans Serif" color="#003366" size="1">Yards</font></td>
                        <td width="73"><font face="MS Sans Serif" color="#003366" size="1">Meter</font></td>
                        <td width="100"><font face="MS Sans Serif" color="#003366" size="1">MM</font></td>
                        <td width="73"><font face="MS Sans Serif" color="#003366" size="1">Feet</font></td>
                        <td width="73"><font face="MS Sans Serif" color="#003366" size="1">Inches</font></td>
                        <td width="118">
                            <div align="right">
                                <input type="button" className="initial2" onClick={handleFocus} value='Clear' />
                            </div>
                        </td>
                    </tr>
                    <tr align="middle" bgColor="#EEE">
                        <td><input width={"full"} onFocus={handleFocus}  size='7' name='val5' value={values.val5} onChange={handleChange} /></td>
                        <td><input onFocus={handleFocus} size='7' name='val3' value={values.val3} onChange={handleChange} /></td>
                        <td><input onFocus={handleFocus} size='7' name='val1' value={values.val1} onChange={handleChange} /></td>
                        <td><input onFocus={handleFocus} size='7' name='val4' value={values.val4} onChange={handleChange} /></td>
                        <td><input onFocus={handleFocus} size='7' name='val2' value={values.val2} onChange={handleChange} /></td>
                        <td>
                            <div align="right">
                                {/* No need for calculate button as the calculation happens in real time */}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* CSS in JS */}
            <style jsx>{`
                .initial2 {
                    background-color:#888888;
                }
            `}</style>

        </form>
    );
};

export default LengthConversionCalculator;
