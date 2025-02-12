import { AnimatePresence, motion } from 'framer-motion';
import { Children, ReactElement, useState } from 'react';
import styles from './Tabs.module.scss';

// Типизация пропсов для Tab
interface TabProps {
  title: string;
  children: React.ReactNode;
  active?: boolean;
}

// Компонент отдельной вкладки
const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

// Типизация пропсов для Tabs
interface TabsProps {
  children: ReactElement<TabProps>[];
}

// Компонент контейнера вкладок
const Tabs = ({ children }: TabsProps) => {
  const tabsArray = Children.toArray(children) as ReactElement<TabProps>[];

  // Определяем вкладку с `active` или берём первую по умолчанию
  const activeTabFromProps =
    tabsArray.find((tab) => tab.props.active)?.props.title ||
    tabsArray[0].props.title;
  const [activeTab, setActiveTab] = useState(activeTabFromProps);

  return (
    <div className={styles.tabs}>
      {/* Заголовки вкладок */}
      <div className={styles.tabs__nav}>
        {tabsArray.map((tab) => (
          <div
            key={tab.props.title}
            className={`${styles.tabs__button} ${activeTab === tab.props.title ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.props.title)}>
            {tab.props.title}
            {activeTab === tab.props.title && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </div>
        ))}
      </div>

      {/* Контент вкладок */}
      <div className={styles.tabs__content}>
        <AnimatePresence mode="wait">
          {tabsArray.map(
            (tab) =>
              activeTab === tab.props.title && (
                <motion.div
                  key={tab.props.title}
                  initial={{ opacity: 0, x: -3 }}  // Анимация по оси X (справа)
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 3 }}   // Уход влево
                  transition={{ duration: 0.1 }}
                >
                  {tab.props.children}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { Tabs, Tab };
