import React from "react";
import styles from "./ResourcesDropdown.module.css";
import DropdownColumn from "../reusables/DropdownColumn";
import Link from "next/link";
import ResourcesSectionIntro from "./ResourcesSectionIntro";

const ResourcesDropdown = () => {
  const resourcesData = [
    [
      "Recommended Diet for High Blood Pressure/Kidney Disease",
      <div key="1" className={styles.resourceContent}>
        <p>
          Here are some helpful resources for managing your diet with high blood
          pressure or kidney disease:
        </p>
        <ul className={styles.resourceList}>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.kidney.org/atoz/content/dietary_hemodialysis"
              className={styles.resourceLink}
            >
              National Kidney Foundation - Dietary Guidelines
            </Link>
          </li>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.nhlbi.nih.gov/education/dash-eating-plan"
              className={styles.resourceLink}
            >
              DASH Diet for High Blood Pressure
            </Link>
          </li>
        </ul>
      </div>,
    ],
    [
      "Recommended Diet for Heart Disease",
      <div key="2" className={styles.resourceContent}>
        <p>Learn about heart-healthy diets and lifestyle changes:</p>
        <ul className={styles.resourceList}>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.heart.org/en/healthy-living/healthy-eating"
              className={styles.resourceLink}
            >
              American Heart Association - Healthy Eating
            </Link>
          </li>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.mayoclinic.org/diseases-conditions/heart-disease/in-depth/heart-healthy-diet/art-20047702"
              className={styles.resourceLink}
            >
              Mayo Clinic - Heart-Healthy Diet
            </Link>
          </li>
        </ul>
      </div>,
    ],
    [
      "Recommended Diet for Diabetic Patients",
      <div key="3" className={styles.resourceContent}>
        <p>Essential resources for managing diabetes through diet:</p>
        <ul className={styles.resourceList}>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.diabetes.org/healthy-living/recipes-nutrition"
              className={styles.resourceLink}
            >
              American Diabetes Association - Nutrition
            </Link>
          </li>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.cdc.gov/diabetes/managing/eat-well.html"
              className={styles.resourceLink}
            >
              CDC - Eating Well with Diabetes
            </Link>
          </li>
        </ul>
      </div>,
    ],
    [
      "Recommended Diet for Gout",
      <div key="4" className={styles.resourceContent}>
        <p>Learn about dietary management of gout:</p>
        <ul className={styles.resourceList}>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.arthritis.org/diseases/gout/diet"
              className={styles.resourceLink}
            >
              Arthritis Foundation - Gout Diet
            </Link>
          </li>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/gout-diet/art-20043927"
              className={styles.resourceLink}
            >
              Mayo Clinic - Gout Diet Guidelines
            </Link>
          </li>
        </ul>
      </div>,
    ],
    [
      "Recommended Diet for Kidney Stone Prevention",
      <div key="5" className={styles.resourceContent}>
        <p>Resources for preventing kidney stones through diet:</p>
        <ul className={styles.resourceList}>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones/eating-diet-nutrition"
              className={styles.resourceLink}
            >
              NIDDK - Diet for Kidney Stones
            </Link>
          </li>
          <li className={styles.resourceItem}>
            <Link
              href="https://www.kidney.org/atoz/content/kidney-stones-diet"
              className={styles.resourceLink}
            >
              National Kidney Foundation - Stone Prevention
            </Link>
          </li>
        </ul>
      </div>,
    ],
  ];

  return (
    <div className={styles.teamSection + " content_box"}>
      <ResourcesSectionIntro
        title="ICN SHIFA Clinic Recommended Diets"
        description="Here are some helpful resources for managing your diet with high blood pressure or kidney disease. Please reach out to our registered medical professionals if you have any questions or concerns about your health and would like a diet recommend to you. Taking care of your health starts with what you put into your body on a daily basis."
      />
      <div className={styles.dropdownColumn}>
        <DropdownColumn
          columnSize="100%"
          numDropdowns={5}
          testArr={resourcesData}
        />
      </div>
    </div>
  );
};

export default ResourcesDropdown;
