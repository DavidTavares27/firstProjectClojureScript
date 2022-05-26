(ns firstapp.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views
(defonce todos (r/atom
            [{:desc "Elon Musk (US$ 219 bilhões): fundador da Tesla e da SpaceX" :completed true}
             {:desc "Jeff Bezos (US$ 171 bilhões): fundador da Amazon" :completed false}
             {:desc "Bernard Arnault e família (US$ 158 bilhões): líder do império LVMH" :completed true}
             {:desc "Bill Gates (US$ 129 bilhões): fundador da Microsoft" :completed false}
             {:desc "Warren Buffett (US$ 118 bilhões): dono da Berkshire Hathaway" :completed true}]))

(def db {:task/id {1 {:desc "Elon Musk (US$ 219 bilhões): fundador da Tesla e da SpaceX" :completed true}
                   2 {:desc "Jeff Bezos (US$ 171 bilhões): fundador da Amazon" :completed false}
                   3 {:desc "Bernard Arnault e família (US$ 158 bilhões): líder do império LVMH" :completed true}
                   4 {:desc "Bill Gates (US$ 129 bilhões): fundador da Microsoft" :completed false}
                   5 {:desc "Warren Buffett (US$ 118 bilhões): dono da Berkshire Hathaway" :completed true}}})
(get-in db [:task/id 3])



(defn todo-form []
  (let [new-item (r/atom "") new-item-completed (r/atom false)]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (swap! todos conj {:completed @new-item-completed :desc @new-item})
                           (reset! new-item "")
                           (reset! new-item-completed false))}
       [:input {:type "checkbox" 
                :value @new-item-completed
                :on-change (fn[e] 
                             (let [new-item-value (.-checked (.-target e))
                                   new-item-value2 (-> e
                                                       .-target
                                                       .-checked)]
                               (reset! new-item-completed new-item-value2)))}]
       

       [:input {:type "text"
                :value @new-item
                :placeholder "Adcionar novo nome"
                :on-change (fn [e]
                             (reset! new-item (.-value (.-target e))))}]])))

(defn todo-item [todo]
  [:li {:style {:color (if (:completed todo) "green" "red")}} (:desc todo)])

(defn todo-list []
  [:ul
   (for [todo @todos]
     (todo-item todo))])

(defn home-page []
  [:div
   [:h2 {:style {:color "tomato"}} "Lista das 5 pessoas mais ricas do mundo"]
   [todo-form]
   [todo-list]
   [:p  "É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso. 'Bill Gates'."]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
