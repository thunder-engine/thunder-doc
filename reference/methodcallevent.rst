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

+-------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`MethodCallEvent<api_MethodCallEvent_MethodCallEvent>` (int32_t  method, Object * sender, const Variant & args) |
+-------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
| :ref:`const Variant<api_const Variant>` * | :ref:`args<api_MethodCallEvent_args>` () const                                                                       |
+-------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|               :ref:`int32_t<api_int32_t>` | :ref:`method<api_MethodCallEvent_method>` () const                                                                   |
+-------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|               :ref:`Object<api_Object>` * | :ref:`sender<api_MethodCallEvent_sender>` () const                                                                   |
+-------------------------------------------+----------------------------------------------------------------------------------------------------------------------+



.. _api_MethodCallEvent_static:
Static Methods
--------------

None

.. _api_MethodCallEvent_methods:
Methods Description
-------------------

.. _api_MethodCallEvent_MethodCallEvent:

**MethodCallEvent::MethodCallEvent** (:ref:`int32_t<api_int32_t>`  *method*, :ref:`Object<api_Object>` * *sender*, :ref:`Variant<api_Variant>` & *args*)

Default constructs an instance of MethodCallEvent.

----

.. _api_MethodCallEvent_args:

:ref:`const Variant<api_const Variant>` * **MethodCallEvent::args** () const

Returns an arguments array for method invocation.

----

.. _api_MethodCallEvent_method:

:ref:`int32_t<api_int32_t>`  **MethodCallEvent::method** () const

Returns an index of method.

----

.. _api_MethodCallEvent_sender:

:ref:`Object<api_Object>` * **MethodCallEvent::sender** () const

Returns the object that sent this event.

----


