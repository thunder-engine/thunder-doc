.. _doc_exporting_variables:

Variables and Property Editor
=============================

Когда вы создаете скрипт, Редактор он автоматически создает его из специального шаблона.
Скрипт будет унаследован от безового класса, для C++ **NativeBehaviour** а для AngelScript **AngelBehaviour**.

Вы можете добавлять ваши переменые и объявлять их свойствами доступными для редактирования из виджета **Property** в Редакторе движка.

Приведенный ниже код объявляет переменную ``myVariable``.
Когда в добавите компанент к любому Актору на Cцене и выберете его, это свойство будет видимо в редакторе Properties как поле с именем "My Variable".
Значение по умолчанию "Some Text" станет значением в окне редактирования свойства.

.. tabs::
    .. code-tab:: c++

        #include <nativebehaviour.h>

        #include <log.h>

        class NewNative_Behaviour : public NativeBehaviour {
            A_REGISTER(NewNative_Behaviour, NativeBehaviour, Components)

            A_PROPERTIES(
                A_PROPERTY(string, myVariable, NewNative_Behaviour::myVariable, NewNative_Behaviour::setMyVariable)
            )

        private:
            string m_myVariable = "Some Text";

        public:
            // Use this to initialize behaviour
            void start() {
                aDebug() << "Current value of myVariable =" << m_myVariable.c_str();
            }

            string myVariable() const {
                return m_myVariable;
            }

            void setMyVariable(string variable) {
                m_myVariable = variable;
            }
        };

    .. code-tab:: java AngelScript

        class NewAngelBehaviour : Behaviour {
            string myVariable = "Some Text";

            // Use this to initialize behaviour
            void start() override {
                debug("Current value of myVariable=" + myVariable);
            }
        };

Каждый Актор к которому вы добавите ваш компанент будет содержать свое значение данного свойства.
Обратите внимание что декларирование свойств в коде написаном на С++ существенно отличается.
Более подробно об этом можно прочитать в секции :doc:`native_introspection`

.. image:: media/my_variable.png
    :alt: My Variable
    :width: 400
	
Для удобства пользователя Редактор Свойств меняет отображение имени вашего свойства добавляя пробел в между буквами нижнего и верхнего регистра.
В коде вам все еще необходимо использовать имя переменной которую вы указали.

Object reference proprties
--------------------------

Помимо базовых типов свойств таких как string, integer, bool и других, разработчику могут понадобится свойства ссылающиеся на другие объекты на Сцене (Transform, Lights, Actors) или ассеты (Texture, Mesh, Material).
Приведенный внизу код покажет вам как это сделать:

.. tabs::
    .. code-tab:: c++

        #include <nativebehaviour.h>

        class NewNative_Behaviour : public NativeBehaviour {
            A_REGISTER(NewNative_Behaviour, NativeBehaviour, Components)

            A_PROPERTIES(
                A_PROPERTYEX(Transform *, myTransform, NewNative_Behaviour::myTransform, NewNative_Behaviour::setMyTransform, "editor=Component")
            )

        private:
            Transform *m_myTransform = nullptr;

        public:
            Transform *myTransform() const {
                return m_myTransform;
            }

            void setMyTransform(Transform *transform) {
                m_myTransform = transform;
            }
        };

    .. code-tab:: java AngelScript

        class NewAngelBehaviour : Behaviour {
            Transform @m_myTransform = null;

            // Use this to initialize behaviour
            void start() override {

            }
        };

Обратите внимание, что в коде написанном на С++ добавлено расширенное свойство.
В этом свойстве есть возможно указать дополнительную мета информацию в виде текстовой строки.
Она нужна для того, что бы редактор понимал с каким типом свойств он работает.
Вданном прмере мы сообщаем что нужно создать специальный Edtor типа ``Component``.
Существуют и другие редакторы:
	* Color
	* Component
	* Asset
	* Alignment
	* Axises
	
В окне Свойств оно будет выглядеть седующим образом:

.. image:: media/my_transform.png
    :alt: My Transform
    :width: 400
	
При нажати на кнопку в редакторе свойств появится специальное окно, которое позволит выбрать нужный вам Объект.

.. image:: media/select_transform.png
    :alt: My Transform
    :width: 400
	