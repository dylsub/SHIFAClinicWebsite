import React from "react";
import styles from "./TeamModal.module.css";
import Person from "./Person";

const TeamModal = ({ isOpen, onClose, teamMembers, teamTitle }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h1>{teamTitle}</h1>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.teamMembersGrid}>
            {teamMembers.map((member, index) => (
              <Person
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
