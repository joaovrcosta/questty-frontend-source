import Link from "next/link";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import styles from "./Profile.module.scss";

export default function Profile() {
  const {userData} = useContext(AuthContext);

  return (
    <main className={styles.profileContainer}>
      <div className={styles.profileContainerSectionImage}>
        <div className={styles.profileContainerSectionImageAvatar}>
          <img
            alt='foto de pefil'
            src='../../assets/images/avatar-03.svg'
            // usar esse ternario quando tudo estiver setado:
            // src={userData?.avatar == null ? avatar03 : userData?.avatar}
            className={styles.profileContainerSectionImageAvatarIcon}
          />
        </div>
        <div className={styles.profileContainerSectionImageEdit}>
          <Link href='/profile/edit'>
            <button className={styles.profileContainerSectionImageEditButton}>
              Editar
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.profileContainerSectionInfo}>
        <div className={styles.profileContainerSectionInfoName}>
          <p className={styles.profileContainerSectionInfoNameText}>
            {/* {userData?.username} */}
          </p>
        </div>

        <div className={styles.profileContainerSectionInfoStar}>
          <div className={styles.profileContainerSectionInfoStarContent}>
            <img
              src='../../assets/images/yellow-star.svg'
              alt='star'
              className={`${styles.profileContainerSectionInfoStarContentImage} ${styles.profileContainerSectionInfoStarContentImageYellow}`}
            />

            <p
              className={`${styles.profileContainerSectionInfoStarContentNumber} ${styles.profileContainerSectionInfoStarContentNumberYellow}`}
            >
              292
            </p>
          </div>

          <div className={styles.profileContainerSectionInfoStarContent}>
            <img
              src='../../assets/images/purple-star.svg'
              alt='star'
              className={`${styles.profileContainerSectionInfoStarContentImage} ${styles.profileContainerSectionInfoStarContentImagePurple}`}
            />

            <p
              className={`${styles.profileContainerSectionInfoStarContentNumber} ${styles.profileContainerSectionInfoStarContentNumberPurple}`}
            >
              0
            </p>
          </div>
        </div>

        <div className={styles.profileContainerSectionInfoDate}>
          <p className={styles.profileContainerSectionInfoDateLastSeen}>
            Ativo pela última vez em <strong></strong>
          </p>
          <p className={styles.profileContainerSectionInfoDateSignedIn}>
            {/* Entrou em <strong>{userData?.created_at}</strong> */}
          </p>
        </div>
      </div>

      <div className={styles.profileContainerLastAnswers}>
        <div className={styles.profileContainerLastAnswersTitle}>
          <p className={styles.profileContainerLastAnswersTitleText}>
            Últimas respostas:
          </p>
        </div>

        <div className={styles.profileContainerLastAnswersCard}>
          <Link href='/'>
            <a className={styles.profileContainerLastAnswersCardLink}>
              <div className={styles.profileContainerLastAnswersCardLinkHeader}>
                <div
                  className={
                    styles.profileContainerLastAnswersCardLinkHeaderImage
                  }
                >
                  <img
                    src='../../assets/images/avatar-03.svg'
                    alt=''
                    className={
                      styles.profileContainerLastAnswersCardLinkHeaderImageIcon
                    }
                  />
                </div>
                <div
                  className={
                    styles.profileContainerLastAnswersCardLinkHeaderNickname
                  }
                >
                  <Link href='/'>
                    <p
                      className={
                        styles.profileContainerLastAnswersCardLinkHeaderNicknameText
                      }
                    >
                      {/* {userData?.username} */}
                    </p>
                  </Link>
                </div>

                <div
                  className={
                    styles.profileContainerLastAnswersCardLinkHeaderBadge
                  }
                >
                  <p
                    className={
                      styles.profileContainerLastAnswersCardLinkHeaderBadgeText
                    }
                  >
                    Ouro
                  </p>
                </div>
              </div>

              <div
                className={styles.profileContainerLastAnswersCardLinkContent}
              >
                <div
                  className={
                    styles.profileContainerLastAnswersCardLinkContentContainer
                  }
                >
                  <p
                    className={
                      styles.profileContainerLastAnswersCardLinkContentContainerText
                    }
                  >
                    A arte digital é a maneira que o artista se relaciona com a
                    maquina, hardware ou software , na atualidade é comum se
                    deparar com a arte digital , ela esta por todo canto…
                  </p>

                  <img
                    src='../../assets/images/right-arrow.svg'
                    alt=''
                    className={
                      styles.profileContainerLastAnswersCardLinkContentContainerArrow
                    }
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
