import React from "react";
import ResourcesSectionIntro from "./ResourcesSectionIntro";
import styles from "./EventsAnnouncements.module.css";

const EventsAnnouncements = () => {
  return (
    <section className={`${styles.container} content_box`}>
      <ResourcesSectionIntro
        title="ICN SHIFA Clinic Events & Announcements"
        description="Please check back periodically as we update this section with exciting news and announcements."
      />

      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/cdKzL-xMxGE"
          title="ICN SHIFA Clinic Events and Announcements"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className={styles.announcementText}>
        ICN SHIFA CLINIC Launches its new operations with added services!
      </p>
    </section>
  );
};

export default EventsAnnouncements;
