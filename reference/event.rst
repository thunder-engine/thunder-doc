.. _api_Event:

Event Class
===========

Inherited: None

.. _api_Event_description:

Description
-----------

Objects processing events by their virtual Object::event() function called. This function can be reimplemented in subclasses to add additional event handling or change existing.

Base Event contain only event type parameter. Subclasses of Event may contain additional parameters to describe particular events.



.. _api_Event_public:

Public Methods
--------------

+------+-------------------------------------------+
|      | :ref:`Event<api_Event_Event>` (int  type) |
+------+-------------------------------------------+
|  int | :ref:`type<api_Event_type>` () const      |
+------+-------------------------------------------+

.. _api_Event_enums:

Public Enums
------------

.. _api_Event_Type:

**enum Event::Type**

This enum type defines base event types and can be extended by the user defined types. User Defined type of Event should be bigger than Event::UserType.

+-----------------------+-------+---------------------------------------------------------+
|              Constant | Value | Description                                             |
+-----------------------+-------+---------------------------------------------------------+
|        Event::Invalid | 0     | Invalid event.                                          |
+-----------------------+-------+---------------------------------------------------------+
|     Event::MethodCall | 1     | Receiver object should invoke method (MethodCallEvent). |
+-----------------------+-------+---------------------------------------------------------+
|     Event::TimerEvent | 2     | Timer event (TimerEvent).                               |
+-----------------------+-------+---------------------------------------------------------+
|        Event::Destroy | 3     | Reseiver object must be deleted immediately.            |
+-----------------------+-------+---------------------------------------------------------+
| Event::LanguageChange | 4     | The application translation changed.                    |
+-----------------------+-------+---------------------------------------------------------+
|       Event::UserType | 100   | User defined event.                                     |
+-----------------------+-------+---------------------------------------------------------+



.. _api_Event_static:

Static Methods
--------------

None

.. _api_Event_methods:

Methods Description
-------------------

.. _api_Event_Event:

**Event::Event** (int  *type*)

Constructs an Event with *type* of event.

----

.. _api_Event_type:

 int **Event::type** () const

Returns type of event.


