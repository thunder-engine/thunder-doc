.. _api_Event:
Event Class
================

Inherited: None

.. _api_Event_description:
Description
-----------

Objects processing events by their virtual Object::event() function called. This function can be reimplemented in subclasses to add additional event handling or change existing.

Base Event contain only event type parameter. Subclasses of Event may contain additional parameters to describe particular events.



.. _api_Event_public:
Public Methods
--------------

+-------------------------------+------------------------------------------------+
|                               | :ref:`Event<api_Event_Event>` (uint32_t  type) |
+-------------------------------+------------------------------------------------+
| :ref:`uint32_t<api_uint32_t>` | :ref:`type<api_Event_type>` () const           |
+-------------------------------+------------------------------------------------+

.. _api_Event_static:
Static Methods
--------------

None

.. _api_Event_methods:
Methods Description
-------------------

.. _api_Event_Event:

**Event::Event** (:ref:`uint32_t<api_uint32_t>`  *type*)

Constructs an Event with *type* of event.

----

.. _api_Event_type:

:ref:`uint32_t<api_uint32_t>`  **Event::type** () const

Returns type of event.

----


