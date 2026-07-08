פרויקט DevOps

זהו פרויקט אפליקציה תלת-שכבתית (Frontend, Backend, PostgreSQL) שנפרסה באמצעות Docker ו-Kubernetes.

האפליקציה מורכבת משלושה חלקים:
Frontend (ממשק משתמש)
Backend (שרת API)
PostgreSQL (בסיס נתונים)

---

ה-Backend מטפל בבקשות API, ה-Frontend מציג את ממשק המשתמש, וה-PostgreSQL שומר נתונים בצורה קבועה גם אחרי הפעלה מחדש.

---

המערכת עברה קונטיינריזציה באמצעות Docker ונפרסה ב-Kubernetes באמצעות קבצי YAML.

קבצי ה-Kubernetes כוללים:
Deployments, Services, ConfigMap, Secret, PersistentVolumeClaim (PVC), Ingress

---

כדי להריץ את הפרויקט עם Docker:
docker-compose up --build

---

כדי לפרוס את הפרויקט על Kubernetes:
kubectl apply -f k8s/

---

בדיקת מצב המערכת:
kubectl get pods
kubectl get svc
kubectl get ingress

---

ניתן לגשת לאפליקציה דרך Ingress של Minikube או דרך Service.

---

המערכת תומכת ב:
Rolling Updates (עדכונים בלי השבתה)
שמירת מידע קבוע במסד הנתונים (Persistence)
ניהול משתני סביבה באמצעות ConfigMap ו-Secret