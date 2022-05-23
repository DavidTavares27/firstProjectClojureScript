(ns firstapp.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views
(def todos (r/atom
            [{:desc "Elon Musk (US$ 219 bilhões): fundador da Tesla e da SpaceX" :completed true}
            {:desc "Jeff Bezos (US$ 171 bilhões): fundador da Amazon" :completed false}
            {:desc "Bernard Arnault e família (US$ 158 bilhões): líder do império LVMH" :completed true}
            {:desc "Bill Gates (US$ 129 bilhões): fundador da Microsoft" :completed false}
            {:desc "Warren Buffett (US$ 118 bilhões): dono da Berkshire Hathaway" :completed true}]))

(defn todo-form []
  (let [new-item (r/atom "") new-item-complted (r/atom false)]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (swap! todos conj {:completed @new-item-complted :desc @new-item})
                           (reset! new-item "")
                           (reset! new-item-complted false))}
       [:input {:type "checkbox" 
                :value @new-item-complted
                :on-change #(reset! new-item-complted (-> % .-target .-checked))}]
       
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
