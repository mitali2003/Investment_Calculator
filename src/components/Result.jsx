import React from "react";
import { calculateInvestmentResults, formatter } from "../utils/investment";

const Result = ({ userInput }) => {
  console.log(userInput);

  let resultData = calculateInvestmentResults(userInput);
  console.log(resultData);

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year) </th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((data) => {
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>
                  {formatter.format(
                    data.valueEndOfYear -
                      data.annualInvestment * data.year -
                      initialInvestment
                  )}
                </td>
                <td>
                  {formatter.format(
                    data.valueEndOfYear -
                      (data.valueEndOfYear -
                        data.annualInvestment * data.year -
                        initialInvestment)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
