.. _api_System:

System
======

Inherited: :ref:`ObjectSystem<api_ObjectSystem>`

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

+-------+------------------------------------------------------------+
|  bool | :ref:`init<api_System_5f03b4ca>` ()                        |
+-------+------------------------------------------------------------+
|  void | :ref:`processEvents<api_System_fbc89201>` ()               |
+-------+------------------------------------------------------------+
|  void | :ref:`reset<api_System_1e758024>` ()                       |
+-------+------------------------------------------------------------+
|  void | :ref:`setActiveWorld<api_System_726830ac>` (World * world) |
+-------+------------------------------------------------------------+
|  void | :ref:`syncSettings<api_System_45ac36ed>` () const          |
+-------+------------------------------------------------------------+
|   int | :ref:`threadPolicy<api_System_8ba41e23>` () const          |
+-------+------------------------------------------------------------+
|  void | :ref:`update<api_System_ae8321bf>` (World * world)         |
+-------+------------------------------------------------------------+

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

.. _api_System_5f03b4ca:

 bool **System::init** ()

Can be used to initialize and execute necessary routines. This method will be called automatically just after the engine started. Returns true if success.

----

.. _api_System_fbc89201:

 void **System::processEvents** ()

Reimplements: ObjectSystem::processEvents().

Processes all incoming events and executes the System::update method.

----

.. _api_System_1e758024:

 void **System::reset** ()

Can be used to reset all internal system states. This method will be called automatically just after the engine started.

----

.. _api_System_726830ac:

 void **System::setActiveWorld** (:ref:`World<api_World>` * *world*)

Sets active world.

----

.. _api_System_45ac36ed:

 void **System::syncSettings** () const

This method is a callback to react on saving game settings.

----

.. _api_System_8ba41e23:

 int **System::threadPolicy** () const

Returns the thread policy of the system. For more details please refer to System::ThreadPolicy enum.

----

.. _api_System_ae8321bf:

 void **System::update** (:ref:`World<api_World>` * *world*)

All processing operations for the current *world* must be done in this method.


