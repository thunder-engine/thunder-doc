.. _api_System:

System
======

Inherited: None

.. _api_System_description:

Description
-----------

Systems are a basic processors for each Component in the game.


Note: All methods will be called internaly in the engine.



Note: Systems can process only components which registered in this system.



Note: Systems can be executed one by one or in parallel based on thread policy.




.. _api_System_public:

Public Methods
--------------

+-------+------------------------------------------------------------------------------------+
|  void | :ref:`composeComponent<api_System_composeComponent>` (Component * component) const |
+-------+------------------------------------------------------------------------------------+
|  bool | :ref:`init<api_System_init>` ()                                                    |
+-------+------------------------------------------------------------------------------------+
|  void | :ref:`processEvents<api_System_processEvents>` ()                                  |
+-------+------------------------------------------------------------------------------------+
|  void | :ref:`reset<api_System_reset>` ()                                                  |
+-------+------------------------------------------------------------------------------------+
|  void | :ref:`setActiveWorld<api_System_setActiveWorld>` (World * world)                   |
+-------+------------------------------------------------------------------------------------+
|  void | :ref:`syncSettings<api_System_syncSettings>` () const                              |
+-------+------------------------------------------------------------------------------------+
|   int | :ref:`threadPolicy<api_System_threadPolicy>` () const                              |
+-------+------------------------------------------------------------------------------------+
|  void | :ref:`update<api_System_update>` (World * world)                                   |
+-------+------------------------------------------------------------------------------------+

.. _api_System_enums:

Public Enums
------------

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

.. _api_System_composeComponent:

 void **System::composeComponent** (:ref:`Component<api_Component>` * *component*) const

This method is a helper to initialize specifically a new *component*. Usually used in the editor.

----

.. _api_System_init:

 bool **System::init** ()

Can be used to initialize and execute necessary routines. This method will be called automatically just after the engine started. Returns true if success.

----

.. _api_System_processEvents:

 void **System::processEvents** ()

Reimplements: ObjectSystem::processEvents().

Processes all incoming events and executes the System::update method.

----

.. _api_System_reset:

 void **System::reset** ()

Can be used to reset all internal system states. This method will be called automatically just after the engine started.

----

.. _api_System_setActiveWorld:

 void **System::setActiveWorld** (:ref:`World<api_World>` * *world*)

Sets active *world*.

----

.. _api_System_syncSettings:

 void **System::syncSettings** () const

This method is a callback to react on saving game settings.

----

.. _api_System_threadPolicy:

 int **System::threadPolicy** () const

Returns the thread policy of the system. For more details please refer to System::ThreadPolicy enum.

----

.. _api_System_update:

 void **System::update** (:ref:`World<api_World>` * *world*)

All processing operations for the current *world* must be done in this method.


