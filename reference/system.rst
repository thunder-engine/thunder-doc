.. _api_System:
System Class
================

Inherited: :ref:`ObjectSystem<api_ObjectSystem>`

.. _api_System_description:
Description
-----------

A base interface for all in-game systems.

Systems are a basic processors for each Component in the game.

Note: All methods will be called internaly in the engine.

Note: Systems can process only components which registered in this system.

Note: Systems can be executed one by one or in parallel based on thread policy.



.. _api_System_public:
Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------------------+
|                                     | :ref:`System<api_System_System>` ()                                                |
+-------------------------------------+------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`composeComponent<api_System_composeComponent>` (Component * component) const |
+-------------------------------------+------------------------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`init<api_System_init>` ()                                                    |
+-------------------------------------+------------------------------------------------------------------------------------+
| :ref:`const char<api_const char>` * | :ref:`name<api_System_name>` () const                                              |
+-------------------------------------+------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`processEvents<api_System_processEvents>` ()                                  |
+-------------------------------------+------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setActiveScene<api_System_setActiveScene>` (Scene * scene)                   |
+-------------------------------------+------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`syncSettings<api_System_syncSettings>` () const                              |
+-------------------------------------+------------------------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`threadPolicy<api_System_threadPolicy>` () const                              |
+-------------------------------------+------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`update<api_System_update>` (Scene * scene)                                   |
+-------------------------------------+------------------------------------------------------------------------------------+

.. _api_System_enums:
Public Enums
--------------

.. _api_System_ThreadPolicy:
**enum System::ThreadPolicy**

+--------------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     Constant | Value | Description                                                                                                                                                                                                             |
+--------------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| System::Main | 0     | The System::update will be executed one by one in the main thread. This method is handy when you need to execute systems with exact sequence. This policy uses only one CPU core.                                       |
+--------------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| System::Pool | 1     | The System::update will be executed in the dedicated thread pool. Please note, there is no warranty of a sequence of execution for this case. This policy is preferable because it utilizes CPU cores more efficiently. |
+--------------+-------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_System_static:
Static Methods
--------------

None

.. _api_System_methods:
Methods Description
-------------------

.. _api_System_System:

**System::System** ()

Default constructs an instance of System.

----

.. _api_System_composeComponent:

:ref:`void<api_void>`  **System::composeComponent** (:ref:`Component<api_Component>` * *component*) const

This method is a helper to initialize specifically a new *component*. Usually used in the editor.

----

.. _api_System_init:

:ref:`bool<api_bool>`  **System::init** ()

----

.. _api_System_name:

:ref:`const char<api_const char>` * **System::name** () const

----

.. _api_System_processEvents:

:ref:`void<api_void>`  **System::processEvents** ()

Reimplemented from ObjectSystem::processEvents().

Processes all incoming events and executes the System::update method.

----

.. _api_System_setActiveScene:

:ref:`void<api_void>`  **System::setActiveScene** (:ref:`Scene<api_Scene>` * *scene*)

Sets active *scene*.

----

.. _api_System_syncSettings:

:ref:`void<api_void>`  **System::syncSettings** () const

This method is a callback to react on saving game settings.

----

.. _api_System_threadPolicy:

:ref:`int<api_int>`  **System::threadPolicy** () const

----

.. _api_System_update:

:ref:`void<api_void>`  **System::update** (:ref:`Scene<api_Scene>` * *scene*)

----


