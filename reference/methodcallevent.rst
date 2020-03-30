.. _api_MethodCallEvent:
MethodCallEvent Class
================

Inherited: :ref:`Event<api_Event>`

.. _api_MethodCallEvent_description:
Description
-----------

MethodCallEvent implements event which contain all necessary information for method invocation.



.. _api_MethodCallEvent_public:
Public Methods
--------------

+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`MethodCallEvent<api_MethodCallEvent_MethodCallEvent>` (int  method, Object * senderm, const Variant & args) |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
| :ref:`const Variant<api_const Variant>` * | :ref:`args<api_MethodCallEvent_args>` () const                                                                    |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                       :ref:`int<api_int>` | :ref:`method<api_MethodCallEvent_method>` () const                                                                |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|               :ref:`Object<api_Object>` * | :ref:`sender<api_MethodCallEvent_sender>` () const                                                                |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------+

.. _api_MethodCallEvent_static:
Static Methods
--------------

None

.. _api_MethodCallEvent_methods:
Methods Description
-------------------

.. _api_MethodCallEvent_MethodCallEvent:

**MethodCallEvent::MethodCallEvent** (:ref:`int<api_int>`  *method*, :ref:`Object<api_Object>` * *senderm*, :ref:`Variant<api_Variant>` & *args*)

Default constructs an instance of MethodCallEvent.

----

.. _api_MethodCallEvent_args:

:ref:`const Variant<api_const Variant>` * **MethodCallEvent::args** () const

Returns an arguments array for method invocation.

----

.. _api_MethodCallEvent_method:

:ref:`int<api_int>`  **MethodCallEvent::method** () const

Returns an index of method.

----

.. _api_MethodCallEvent_sender:

:ref:`Object<api_Object>` * **MethodCallEvent::sender** () const

Returns the object that sent this event.

----


